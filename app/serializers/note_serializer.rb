class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :bg_color, :user_id
end
