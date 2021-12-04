# frozen_string_literal: true

class TodoList < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :color, presence: true
  validates :status, presence: true

  after_create :setOrder

  enum status: [:Ideas, :Todo, :Doing, :Done]

  def self.setOrder(before = nil, after = nil)
    before = 0.0 if before.blank?
    after = before.to_f + 100.0 if after.blank?
  
    result = rand(before.to_f..after.to_f)
    while result.to_f <= before.to_f || TodoList.find_by(order: result.to_f).present?
      result = rand(before.to_f..after.to_f)
    end
    result
  end

  private

  def setOrder 
    self.order = TodoList.where(user_id: user_id, status: status).order(order: :asc).last.try(:order).to_f + 1.0
    self.save(validate: false)
  end
end
