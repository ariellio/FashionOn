class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    helper_method :current_user, :logged_in?
    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
       render json: { err: ['invalid credentials'] }, status: 401 unless current_user
    end

    def logged_in?
        !!current_user
    end

    def log_in!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end
    
    def log_out!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end
