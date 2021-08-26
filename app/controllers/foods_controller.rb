class FoodsController < ApplicationController
  before_action :set_food, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /foods
  def index
    @foods = Food.all

    render json: @foods
  end

  # GET /locations/1/foods/1
  def show
    render json: @food, include: :comments
  end

  # POST /locations/1/foods
  def create
    @location = Location.find(params[:location_id])
    @food = Food.new(food_params)
    @food.user = @current_user
    @food.location = @location
    if @food.save
      render json: @food, status: :created
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /foods/1
  def update
    if @food.update(food_params)
      render json: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  # DELETE /locations/1/foods/1
  def destroy
    @location = Location.find(params[:location_id])
    @food = Food.find(params[:id])
    @food.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_food
      @food = Food.find(params[:id])
      @location = Location.find(params[:location_id])
    end

    # Only allow a list of trusted parameters through.
    def food_params
      params.require(:food).permit(:name, :cuisine, :description, :food_stall, :img_url, :rating)
    end
end
