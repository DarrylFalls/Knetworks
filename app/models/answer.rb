class Answer < ApplicationRecord
  belongs_to :user
  belongs_to :question, dependent: :delete
  has_many :answer_comments, dependent: :delete_all
end
