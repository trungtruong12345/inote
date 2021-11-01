class CreateTodoLists < ActiveRecord::Migration[6.1]
  def change
    create_table :todo_lists do |t|
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
