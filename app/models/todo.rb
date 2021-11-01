# frozen_string_literal: true

class Todo < ApplicationRecord
  valdiates :title, presence: true

  emun status: %i[complete incomplete]

  belongs_to :TodoList
end
