class AnswerCommentsController < ApplicationController
  before_action :set_comment, only: [:update, :destroy]

  def index
    @comments = AnswerComment.where(answer_id == params[:answer_id])
  end


  def create
    @comment = AnswerComment.new(comment_params)
    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment, status: :ok
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
  end

  private

  def set_comment
    @comment = AnswerComment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:content, :user_id, :answer_id)
  end
end
