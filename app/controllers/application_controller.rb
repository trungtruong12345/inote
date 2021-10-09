class ApplicationController < ActionController::API
  before_action :authenticate_request
  attr_reader :current_user

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    unless @current_user || @current_user.try(:email_verification?)
      render json: { error: 'Not Authorized', status: 401 },
             status: :ok
    end
  end
end
