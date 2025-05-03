Rails.application.routes.draw do
  namespace :api do
    resources :todos do
      member do
        patch 'update_compleleted'
      end
    end
  end
end
