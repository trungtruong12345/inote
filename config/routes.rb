# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api do
    resources :notes

    resources :vocabulary_words
    
    get "get_more_todo" => "todo_lists#get_more"

    resources :todo_lists do
      # collection do
      #   get "get_more/:status/:last_id", to: "todo_lists#get_more"
      # end
      member do
        put :order
      end
    end

    post 'sign_in', to: 'authentication#sign_in'
    post 'sign_up', to: 'authentication#sign_up'
    get 'verify_email_confirmation_code', to: 'authentication#verify_email_confirmation_code'
    get 'resend_email_confirmation_code', to: 'authentication#resend_email_confirmation_code'
    get 'auth', to: 'authentication#auth'
    post 'change_password', to: 'authentication#change_password'
  end
end
