class AddColumnEmailStatusToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :email_status, :string, :null => true
  end
end
