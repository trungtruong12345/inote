class CreateVocabularies < ActiveRecord::Migration[6.1]
  def change
    create_table :vocabularies do |t|
      t.string :word
      t.string :vocalize
      t.string :translate
      t.text :example
      t.numeric :user_id

      t.timestamps
    end
  end
end
