class VocabularySerializer < ActiveModel::Serializer
  attributes :id, :word, :vocalize, :translate, :example, :user_id
end
