class Api::ItemsController < ApplicationController

    def index
        @items = Item.all
        render :index
    end

    def show
       # debugger
        @item = Item.find(params[:id])
        render :show
    end


    def search
        # 
        @items = Item.find_item(params[:search])
        render :index
    end
end