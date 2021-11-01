class CreateTodoLists < ActiveRecord::Migration[6.1]
  def change
    create_table :todo_lists do |t|
      t.integer :user_id
      t.string :bg_color
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
