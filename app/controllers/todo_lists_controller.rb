# frozen_string_literal: true

class TodoListsController < ApplicationController
  before_action :set_todo_list, only: %i[order show update]

  def index
    @todo_lists = TodoList.statuses.map do |key, val|
      {
        title: key,
        tasks: current_user.todo_lists.where(status: val).order(order: :desc).map do |todo|
                 TodoListSerializer.new(todo)
               end
      }
    end
    render json: { columns: @todo_lists }
  end

  # params: before, after, status
  def order
    after = params[:before].present? ? current_user.todo_lists.find_by(id: params[:before]).order.to_f : nil
    before = params[:after].present? ? current_user.todo_lists.find_by(id: params[:after]).order.to_f : nil

    if @todo_list.update(status: params[:status], order: TodoList.setOrder(before, after))
      render json: { data: @todo_list, status: 200 }
    else
      render json: { data: @todo_list.errors, status: 422 }, status: :ok
    end
  end

  def show
    render json: { data: TodoListSerializer.new(@todo_list), status: 200 }
  end

  def create
    @todo_list = current_user.todo_lists.new(todo_list_params)

    if @todo_list.save
      render json: { data: @todo_list, status: 200 }, status: :created, location: @todo_list
    else
      render json: { data: @todo_list.errors, status: 422 }, status: :ok
    end
  end

  def update
    if @todo_list.update(todo_list_params)
      render json: { data: @todo_list, status: 200 }
    else
      render json: { data: @todo_list.errors, status: 422 }, status: :ok
    end
  end

  # def destroy
  #   @todo_list.destroy
  # end

  private

  def set_todo_list
    @todo_list = current_user.todo_lists.find_by(id: params[:id])
  end

  def todo_list_params
    params.require(:todo_list).permit(:id, :title, :content, :est, :status, :color)
  end

  def current_user
    User.find(2)
  end
end
