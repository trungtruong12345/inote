class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.text :title
      t.text :content
      t.string :bg_color
      t.integer :user_id

      t.timestamps
    end
  end
end
