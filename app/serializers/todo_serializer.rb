class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :status, :todo_list_id
end
