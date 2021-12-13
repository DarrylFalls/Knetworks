class QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :update]
  before_action :set_question_group, only: :destroy

  def index
    @questions = Question.where(category_id: question_params[:category_id])
    render json: @questions
  end

  def show
    render json: @question, include: :answers
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      render json: @question, status: :created
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  def update
    if @question.update(question_params)
      render json: @question, status: :ok
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @question.destroy
  end

  private

  def set_question
    @question = Question.find(params[:id])
  end

  def set_question_group
    @question = Question.find(params[:id])
    @answers = Answer.where(question_id: params[:id])
    # @answer_comments = AnswerComment.where(answer_id: @answers)
    # @group = [
    #   @answer_comments,
    #   @answers,
    #   @question
    # ]
  end

  def question_params
    params.require(:question).permit(:content, :user_id, :category_id)
  end
end
