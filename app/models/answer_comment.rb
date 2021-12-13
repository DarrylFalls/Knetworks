class AnswerComment < ApplicationRecord
  belongs_to :user
  belongs_to :answer, dependent: :delete
  belongs_to :question
end
