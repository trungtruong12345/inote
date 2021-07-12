class AddPasswordDigestToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :password_digest, :text, :null => true
    #Ex:- :null => false
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
