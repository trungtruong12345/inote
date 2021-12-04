class TodoListSerializer < ActiveModel::Serializer
  attributes :id, :est, :title, :color, :status, :order, :content

  def status
    TodoList.statuses[object.status]
  end
end
