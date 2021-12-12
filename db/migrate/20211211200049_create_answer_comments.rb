class CreateAnswerComments < ActiveRecord::Migration[6.1]
  def change
    create_table :answer_comments do |t|
      t.string :content
      t.references :user, null: false, foreign_key: true
      t.references :answer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
