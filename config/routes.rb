Rails.application.routes.draw do
  root to: 'static_pages#root'
  # TODO: Add routes for users and sessions
  resources :users, only: [:create]
end
