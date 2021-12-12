class AnswersController < ApplicationController
  before_action :set_answer, only: [:show, :update]
  before_action :set_answer_group, only: :destroy

  def index
    @answers = Answer.where(question_id: answer_params[:question_id])
    render json: @answers, include: :answer_comments
  end

  def show
    @answer = Answer.find(params[:id])
    render json: @answer, include: :answer_comments
  end

  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      render json: @answer, status: :created
    else
      render json: @answer.errors, status: :unprocessable_entity
    end
  end

  def update
    if @answer.update(answer_params)
      render json: @answer, include: :answer_comments, status: :ok
    else
      render json: @answer.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @group.destroy
  end

  private

  def set_answer
    @answer = Answer.find(params[:id])
  end

  def set_answer_group
    @answer = Answer.find(params[:id])
    @answer_comments = AnswerComment.where(answer_id == params[:id])
    @group = [
      @answer_comments,
      @answer
    ]
  end

  def answer_params
    params.require(:answer).permit(:content, :user_id, :question_id)
  end
end
