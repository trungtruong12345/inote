# frozen_string_literal: true

class TodosController < ApplicationController
  before_action :set_todo, only: %i[show update destroy]
  before_action :set_todo_list, only: [:create]

  # GET /todos
  def index
    @todos = current_user.todos

    render json: @todos
  end

  # GET /todos/1
  def show
    render json: @todo
  end

  # POST /todos
  def create
    @todo = @todo_list.todos.create(todo_params) 

    if @todo.save
      render json: @todo, status: :created, location: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todos/1
  def update
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  def destroy
    @todo.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_todo
    @todo = current_user.todos.find_by(id: params[:id])
  end

  def set_todo_list
    @todo_list = current_user.todo_lists.find_by(id: params[:todo_list_id])  
  end
  
  # Only allow a list of trusted parameters through.
  def todo_params
    params.require(:todo).permit(:title, :status, :content, :est, :todo_list_id)
  end
end
