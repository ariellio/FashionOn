Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :reviews, only: [:destroy, :show, :update]
    # resources :items, only: [:index, :show]

<<<<<<< HEAD
    # get "/items/title/reviews", to: "reviews#index"

    get "/items/search", to: "items#search"
    
    resources :items, only: [:show, :index] do 
      resources :reviews, only: [:index, :create]
    end

=======
   #get "/items/title/reviews", to: "reviews#index"

    get "/items/search", to: "items#search"
    resources :items, only: [:show, :index] do
      resources :reviews, only: [:create, :index]
    end
>>>>>>> reviews
  end
  
  
  root to: "static_pages#root"
end
