class CreateTodoList < ActiveRecord::Migration[6.1]
  def change
    create_table :todo_lists do |t|
      t.integer :user_id
      t.string :title
      t.text :content
      t.string :est
      t.string :color
      t.float :order

      t.timestamps
    end
  end
end
