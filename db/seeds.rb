# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

AnswerComment.destroy_all
Answer.destroy_all
Question.destroy_all
Category.destroy_all
User.destroy_all

@user1 = User.create!(username: 'User1', email: 'user1@email.com', password: 'password')
@user2 = User.create!(username: 'User2', email: 'user2@email.com', password: 'password')
@user3 = User.create!(username: 'User3', email: 'user3@email.com', password: 'password')
@user4 = User.create!(username: 'User4', email: 'user4@email.com', password: 'password')
@user5 = User.create!(username: 'User5', email: 'user5@email.com', password: 'password')

puts "#{User.count} users created"

Category.create!(name: 'science')
Category.create!(name: 'philosophy')
Category.create!(name: 'history')
# Category.create!(name: '')

puts "#{Category.count} categories created"

Question.create!(content: 'How big is the Milky Way?', user_id: '1', category_id: '1')
Question.create!(content: 'What is deuterium?', user_id: '2', category_id: '1')
Question.create!(content: 'What is the meaning of life?', user_id: '3', category_id: '2')
Question.create!(content: 'Can you stand in the same river twice?', user_id: '4', category_id: '2')
Question.create!(content: 'Who did the US fight in the war of 1812?', user_id: '5', category_id: '3')
Question.create!(content: 'How old are the pyramids of Egypt?', user_id: '1', category_id: '3')

puts "#{Question.count} questions created"

Answer.create!(content: 'Its about 100,000 light years across.', user_id: '2', question_id: '1')
Answer.create!(content: 'It is an isotope of hydrogen with a nucleus consisting of one proton and one neutron, which is double the mass of the nucleus of ordinary hydrogen (one proton).', user_id: '3', question_id: '2')
Answer.create!(content: '42', user_id: '4', question_id: '3')
Answer.create!(content: 'depends on who you ask', user_id: '5', question_id: '4')
Answer.create!(content: 'Great Britain', user_id: '1', question_id: '5')
Answer.create!(content: 'They are believed to be about 4,500 years old.', user_id: '2', question_id: '6')

puts "#{Answer.count} answers created"

# AnswerComment.create!(content: 'iajuh ioj', user_id: '1', answer_id: '2', question_id: '2')
# AnswerComment.create!(content: 'ia wejioisdj da', user_id: '2', answer_id: '1', question_id: '1')
# AnswerComment.create!(content: 'ioja hjsaioj adf', user_id: '3', answer_id: '3', question_id: '3')
# AnswerComment.create!(content: 'pa ojak jo', user_id: '4', answer_id: '4', question_id: '4')
# AnswerComment.create!(content: 'wiohj oaj', user_id: '5', answer_id: '5', question_id: '5')
# AnswerComment.create!(content: 'paoioiwaj afawe', user_id: '1', answer_id: '5', question_id: '5')
# AnswerComment.create!(content: 'a ojeowijf de', user_id: '2', answer_id: '3', question_id: '3')
# AnswerComment.create!(content: 'skla ioioasjh', user_id: '3', answer_id: '2', question_id: '2'
# AnswerComment.create!(content: 'mcsjs usw jdu', user_id: '4', answer_id: '1', question_id: '1')
# AnswerComment.create!(content: 'iak ljsdakio hjl asdfa', user_id: '5', answer_id: '4', question_id: '4')
# AnswerComment.create!(content: 'wioj jsd iooi jaoj', user_id: '1', answer_id: '4', question_id: '4')
# AnswerComment.create!(content: 'hello', user_id: '2', answer_id: '2', question_id: '2')
# AnswerComment.create!(content: 'goodbye', user_id: '3', answer_id: '3', question_id: '3')

# puts "#{AnswerComment.count} comments created"