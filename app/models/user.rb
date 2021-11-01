# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password

  has_many :vocabulary_words

  has_many :notes

  validates :password, presence: true, length: { minimum: 6, maximum: 15 }

  validates :password_confirmation, presence: true

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :email_confirmation_code, uniqueness: true, presence: true, on: :update

  after_create :set_username

  EMAIL_ACTIVE = true
  EMAIL_INACTIVE = false

  scope :get_user_active, ->(id) { where(email_status: EMAIL_ACTIVE).find_by_id(id) }

  def email_verification?
    email_status == EMAIL_ACTIVE
  end

  def self.generate_email_confirmation_code
    code = ''
    loop do
      code = (0...8).map { rand(65..90).chr }.join
      break if where(email_confirmation_code: code).blank?
    end
    code
  end

  def update_email_confirmation_code
    self.email_confirmation_code = User.generate_email_confirmation_code
    # self.email_status = false
    save(validate: false)
  end

  def send_email_verify
    update_email_confirmation_code
    UserMailer.send_email_verify self
  end

  def self.verify_email_confirmation_code?(confirmation_code, user_id)
    user = User.where(email_confirmation_code: confirmation_code).find_by(id: user_id)
    if user.blank?
      false
    else
      user.email_status = EMAIL_ACTIVE
      user.save(validate: false)
      true
    end
  rescue StandardError => e
    false
  end

  def set_username
    self.username = 'trung truong'
    save(validate: false)
  end
end
