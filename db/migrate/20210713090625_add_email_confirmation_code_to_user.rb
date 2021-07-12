class AddEmailConfirmationCodeToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :email_confirmation_code, :string
  end
end
