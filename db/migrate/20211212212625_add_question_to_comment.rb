class AddQuestionToComment < ActiveRecord::Migration[6.1]
  def change
    add_reference :answer_comments, :question, null: false, foreign_key: true
  end
end
