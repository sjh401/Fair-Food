Rails.application.routes.draw do
  resources :locations, only: [ :index, :show ] do
    resources :foods do 
      resources :comments
    end
  end

  resources :users, only: [:create, :index]
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
