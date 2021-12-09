class Song < ApplicationRecord
  belongs_to :artist, dependent: :destroy

  validates :title, :length, presence: true

end