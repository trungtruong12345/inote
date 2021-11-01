class AlterTableTodoAndTodoList < ActiveRecord::Migration[6.1]
  def change
    add_column :todos, :content, :text, :null => true
    add_column :todos, :est, :string, null: true
    
    remove_column :todo_lists, :bg_color
    remove_column :todo_lists, :start_date
    remove_column :todo_lists, :end_date
    add_column :todo_lists, :est, :string, null: true
  end
end
