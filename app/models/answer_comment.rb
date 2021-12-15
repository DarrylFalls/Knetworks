class AnswerComment < ApplicationRecord
  belongs_to :user
  belongs_to :answer
  belongs_to :question
end
