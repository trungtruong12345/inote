class UserMailer < ApplicationMailer
    def send_email_verify user
        @user = user
        mail to: user.email, subject: "Sample Email"
    end
end
