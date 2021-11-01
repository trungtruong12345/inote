# frozen_string_literal: true

class TodoListsController < ApplicationController
  before_action :set_todo_list, only: %i[show update destroy]

  # GET /todo_lists
  def index
    @todo_lists = current_user.todo_lists.order(created_at: :desc)
    resutl = {}
    @todo_lists.each do |todo_list|
      date = todo_list.created_at.to_date == Time.now.to_date ? :Today : todo_list.created_at.to_date 
      resutl[date.to_s] ||= []
      resutl[date.to_s] << TodoListSerializer.new(todo_list)
    end
    render json: resutl
  end

  # GET /todo_lists/1
  def show
    render json: @todo_list
  end

  # POST /todo_lists
  def create
    @todo_list = current_user.todo_lists.new(todo_list_params)

    if @todo_list.save
      render json: @todo_list, status: :created, location: @todo_list
    else
      render json: @todo_list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todo_lists/1
  def update
    if @todo_list.update(todo_list_params)
      render json: @todo_list
    else
      render json: @todo_list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todo_lists/1
  def destroy
    @todo_list.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_todo_list
    @todo_list = current_user.todo_lists.find_by(id: params[:id])
  end

  # Only allow a list of trusted parameters through.
  def todo_list_params
    params.require(:todo_list).permit(:est, todos_attributes: [:id, :title, :content, :est, :status])
  end
end
