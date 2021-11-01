class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :est, :status

  def status
    Todo.statuses[object.status].to_i
  end
end
