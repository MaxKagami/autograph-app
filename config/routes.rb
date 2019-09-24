Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :articles
    end
  end

  root to: 'dashboard#index'

  post 'refresh', controller: :refresh, action: :create
  post 'signin', controller: :signin, action: :create
  post 'signin', controller: :signin, action: :destroy

end
