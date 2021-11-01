class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.text :title
      t.integer :status
      t.string :todo_list_id

      t.timestamps
    end
  end
end
