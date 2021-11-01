# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api do
    resources :notes

    resources :vocabulary_words

    # resources :todos, except: %i[create]

    resources :todo_lists do
      resources :todos
    end

    post 'sign_in', to: 'authentication#sign_in'
    post 'sign_up', to: 'authentication#sign_up'
    get 'verify_email_confirmation_code', to: 'authentication#verify_email_confirmation_code'
    get 'resend_email_confirmation_code', to: 'authentication#resend_email_confirmation_code'
    get 'auth', to: 'authentication#auth'
    post 'change_password', to: 'authentication#change_password'
  end
end
