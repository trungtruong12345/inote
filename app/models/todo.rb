# frozen_string_literal: true

class Todo < ApplicationRecord
  validates :title, presence: true

  enum status: %i[incomplete complete]

  belongs_to :todo_list

  after_destroy :check_todo_list

  private

  def check_todo_list
    todo_list = self.todo_list
    todo_list.destroy if todo_list.todos.blank?
  end
end
