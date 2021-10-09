class CreateVocabularyWords < ActiveRecord::Migration[6.1]
  def change
    create_table :vocabulary_words do |t|
      t.text :word
      t.text :pronounce
      t.text :translate
      t.text :example
      t.integer :user_id

      t.timestamps
    end
  end
end
