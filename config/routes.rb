Rails.application.routes.draw do
  resources :comments
  resources :foods
  resources :locations, only: [:index, :show]
  resources :users, only: :create
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
