class TodoListSerializer < ActiveModel::Serializer
  attributes :id, :est, :title, :color, :status, :order, :content, :time

  def status
    TodoList.statuses[object.status]
  end

  def time
    TodoList.seconds_to_hms(object.est - Time.now) if object.est.present?
  end
end
