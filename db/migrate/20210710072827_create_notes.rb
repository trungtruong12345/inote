class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :title
      t.text :content
      t.numeric :user_id
      t.string :bgColor

      t.timestamps
    end
  end
end