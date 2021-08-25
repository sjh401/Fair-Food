class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /locations/1/foods/1/comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  # GET /locations/1/foods/1/comments/1
  def show
    render json: @comment
  end

  # POST /locations/1/foods/1/comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    @comment.food = Food.find(params[:food_id])
    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /locations/1/foods/1/comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /locations/1/foods/1/comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
      @food = Food.find(params[:food_id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:message)
    end
end
