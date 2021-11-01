# frozen_string_literal: true

class TodoList < ApplicationRecord
  has_many :todos, :dependent => :destroy
  
  belongs_to :user

  accepts_nested_attributes_for :todos, allow_destroy: true
end
