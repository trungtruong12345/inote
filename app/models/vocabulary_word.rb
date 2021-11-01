# frozen_string_literal: true

class VocabularyWord < ApplicationRecord
  has_one_attached :image

  belongs_to :user

  validates :image, presence: false, blob: { content_type: %r{^image/}, size_range: 1..(5.megabytes) }

  validates :word, presence: true

  validates :translate, presence: true
end
