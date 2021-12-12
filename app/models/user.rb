class User < ApplicationRecord
  has_secure_password

  has_many :questions
  has_many :answers
  has_many :answer_comments

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }
end
