Rails.application.routes.draw do
  scope :api do
    resources :vocabularies
    resources :notes
  end
end
