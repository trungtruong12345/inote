class VocabularyWordSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :word, :pronounce, :translate, :example, :image

  def image
    return ENV["BASE_URL"] + rails_blob_path(object.image, only_path: true) if object.image.attached?
    ENV["BASE_URL"] + '/images/no_image.jpeg'
  end
end
