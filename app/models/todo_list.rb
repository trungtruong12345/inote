# frozen_string_literal: true

class TodoList < ApplicationRecord
  has_many :todos
end
