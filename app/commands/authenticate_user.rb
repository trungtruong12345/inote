# create header, login
class AuthenticateUser
  prepend SimpleCommand

  def initialize(username_or_email, password)
    @password = password
    @username_or_email = username_or_email
  end

  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_accessor :email, :password

  def user
    user = User.where('username = ? or email = ? ', @username_or_email, @username_or_email).first
    return user if user && user.authenticate(password) && user.try(:email_verification?)
    errors.add :user_authentication, 'invalid credentials'
    nil
  end
end
