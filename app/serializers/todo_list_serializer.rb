class TodoListSerializer < ActiveModel::Serializer
  attributes :id, :est

  has_many :todos
end
