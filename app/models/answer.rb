class Answer < ApplicationRecord
  belongs_to :user
  belongs_to :question
  has_many :answer_comments, dependent: :destroy
end
