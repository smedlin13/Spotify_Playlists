Rails.application.routes.draw do
  # a route is going to be the http request
  root "playlists#index"

  resources :playlists do
    resources :artists 
  end

  resources :artists do
    resources :songs
  end
  


end
