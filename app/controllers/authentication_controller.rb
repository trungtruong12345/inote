class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request, except: [:auth]

  def auth; end

  def sign_in
    command = AuthenticateUser.call(params[:username_or_email], params[:password])

    if command.success?
      render json: { auth_token: command.result }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

  def sign_up
    user = User.new(sign_up_params)
    if user.save
      user.update_email_confirmation_code
      user.send_email_verify.deliver
      render json: {
        messages: 'Check confirm code from your email',
        user_id: user.id,
        status: 200
      }, status: :ok
    else
      render json: {
        messages: user.errors.full_messages,
        status: 422
      }, status: 200
    end
  end

  def verify_email_confirmation_code
    if User.verify_email_confirmation_code? params[:confirmation_code], params[:user_id]
      render json: { message: 'Sign Up Success' }, status: :ok
    else
      render json: { message: 'Email verification code is not correct' }, status: 422
    end
  end

  def resend_email_confirmation_code
    User.find_by(id: params[:user_id]).try(:send_email_verify).try(:deliver)
  end

  private

  def sign_up_params
    params.permit(:username, :email, :password, :password_confirmation)
  end
end
