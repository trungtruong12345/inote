class RemoveTableTodoAndTodoList < ActiveRecord::Migration[6.1]
  def change
    drop_table :todos
    drop_table :todo_lists
  end
end
