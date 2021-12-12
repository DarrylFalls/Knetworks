class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :content
      t.references :user, null: false, foreign_key: true
      t.references :category

      t.timestamps
    end
  end
end
