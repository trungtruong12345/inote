# create header, login
class AuthenticateUser
  prepend SimpleCommand

  def initialize(email, password)
    @password = password
    @email = email
  end

  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private

  attr_accessor :email, :password

  def user
    user = User.find_by(email: email)
    return user if user && user.authenticate(password) && user.try(:email_verification?)
    errors.add :user_authentication, 'invalid credentials'
    nil
  end
end
