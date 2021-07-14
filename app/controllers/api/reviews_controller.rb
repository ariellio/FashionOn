class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, except: [:index]

    def index
        @reviews = Review.includes(:user).find_reviews(params[:title])
        render :index
    end

    def show
        @review = Review.includes(:item).find_by(id: params[:id]) 
        render :show
    end
    def create 
        @review = Review.new(review_params)
        @review.author_id = current_user.id

        if @review.save
            @item = Item.find_by(id: params[:review][:item_id])
            render "api/item/show"
        else

            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id]).destroy
        @item = Item.find_by(name: params[:review][:item])
        render "api/items/show"
    end

    def update 
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            @item = Item.find_by(id: params[:review][:item_id])
            render "api/items/show"
        else
            render json: @reviews.errors.full_messages, status :422
        end
    end



    def review_params
        params.require(:review).permit(:title, :body, :rating, :item_id)
    end


end