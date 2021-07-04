class Api::SessionController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username],params[:user][:password])

        if @user
            login!(@user)
            render "/api/users/show"
        else
            render json: ["Invalid username or password"]
        end
    end

    def destroy
        @user = current_user
        if @user
            log_out!
            render "api/users/show"
        else
            render json: ["You aren't logged in!'"], status: 404
        end

    end

    

end