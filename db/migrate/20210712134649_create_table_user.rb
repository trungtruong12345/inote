class CreateTableUser < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username, :null => true
      t.string :password, :null => true
      t.string :email, :null => true
      t.timestamps
    end
  end
end
