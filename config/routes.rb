Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :show] do
      resources :playlists, only: [:index]
    end

    resources :playlists, only: [:create, :show, :update, :destroy] do
      resources :songs, only: [:index]
    end
  end
end
