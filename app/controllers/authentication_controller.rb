# frozen_string_literal: true

class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request, except: [:auth]

  def auth
    render json: {
      user_id: current_user.id,
      name: current_user.username,
      email: current_user.email,
      status: 200
    }
  end

  def sign_in
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      render json: { auth_token: command.result, status: 200 }
    else
      render json: { error: command.errors, status: 401 }
    end
  end

  def sign_up
    user = User.new(sign_up_params)
    if user.save
      # user.update_email_confirmation_code
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
      render json: { message: 'Sign Up Success', status: 200 }, status: :ok
    else
      render json: { message: 'Email verification code is not correct', status: 422 }, status: 422
    end
  end

  def resend_email_confirmation_code
    return User.find_by(id: params[:user_id]).send_email_verify.deliver unless params[:user_id].blank?
    return User.find_by(email: params[:email]).send_email_verify.deliver unless params[:email].blank?
  rescue StandardError => e
    render json: { message: 'Account does not exist' }, status: 422
  end

  def change_password
    user = User.find_by(email: change_pass_params[:email])
    if User.verify_email_confirmation_code?(change_pass_params[:email_confirmation_code], user.id)
      if user.update!(password: change_pass_params[:password],
                      password_confirmation: change_pass_params[:password])
        render json: { status: 200 }, status: :ok
      else
        return_error user.errors.full_messages
      end
    else
      return_error ['Email verification code is not correct']
    end
  rescue StandardError => e
    return_error ['Errors']
  end

  private

  def return_error(message = [])
    render json: { message: message, status: 422 }, status: 200
  end

  def sign_up_params
    params.permit(:email, :password, :password_confirmation)
  end

  def change_pass_params
    params.permit(:email, :email_confirmation_code, :password)
  end
end
