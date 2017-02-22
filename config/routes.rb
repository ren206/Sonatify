Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :show] do
      resources :playlists, only: [:index]
    end

    resources :playlists, only: [:create, :show, :update, :destroy]
    resources :listings, only: [:create, :destroy]

    resources :artists, only: [ :show, :index ]
    resources :albums, only: [ :show ]
    resources :songs, only: [ :show ]
  end
end
