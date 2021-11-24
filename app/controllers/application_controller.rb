class ApplicationController < ActionController::API
    SECRET_KEY = Rails.application.secrets.secret_key_base.to_s
    rescue_from Users::NotAuthorized, with: :user_not_authorized

    def encode(payload, exp = 24.hours.from_now)
        payload[:exp] = exp.to_i
        JWT.encode(payload, SECRET_KEY)
    end

    def decode(token)
        decoded = JWT.decode(token, SECRET_KEY)[0]
        HashWithIndifferentAccess.new decoded
    end

    def authorize_request
        header = request.headers['Authorization']
        header = header.split(' ').last if header
        begin
            @decoded = decode(header)
            @current_user = User.find(@decoded[:id])
        rescue ActiveRecord::RecordNotFound => e
            render json: { errors: e.message }, status: :unauthorized
        rescue JWT::DecodeError => e
            render json: { errors: e.message }, status: :unauthorized
        rescue Users::NotAuthorized => e
            render json: { errors: e.message }, status: :unauthorized
        end

    end

    # def authorize_admin
    #     header = request.headers['Authorization']
    #     header = header.split(' ').last if header
    #     begin
    #         @decoded = decode(header)
    #         @current_user = User.find(@decoded[:id])
    #         admin = @current_user.admin
    #     rescue User::NotAuthorized => e
    #         render json: { errors: e.message }, status: :unauthorized
    #     end
    # end


  private
  def user_not_authorized
    flash[:error] = "You don't have access to this section."
    redirect_back(fallback_location: root_path)
  end

end
