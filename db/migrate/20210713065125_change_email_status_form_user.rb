class ChangeEmailStatusFormUser < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :email_status, :boolean, :null => true, :default => false
  end
end
