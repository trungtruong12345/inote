class ChangeColumnFromTodoList < ActiveRecord::Migration[6.1]
  def change
    change_column :todo_lists, :est, :datetime, :null => true
  end
end
