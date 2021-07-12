Rails.application.routes.draw do
  scope :api do
    post 'sign_in', to: 'authentication#sign_in'
    post 'sign_up', to: 'authentication#sign_up'
    get 'verify_email_confirmation_code/:user_id/:confirmation_code', to: 'authentication#verify_email_confirmation_code'
    get 'resend_email_confirmation_code/:user_id', to: 'authentication#resend_email_confirmation_code'
    get 'auth', to: 'authentication#auth'
    resources :vocabularies
    resources :notes
  end
end
