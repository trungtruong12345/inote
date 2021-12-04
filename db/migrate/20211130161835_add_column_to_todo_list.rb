class AddColumnToTodoList < ActiveRecord::Migration[6.1]
  def change
    add_column :todo_lists, :status, :integer, :null => true
  end
end
