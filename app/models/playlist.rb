class Playlist < ApplicationRecord
  has_many :artists
  validates :img, :title, presence: true

  
end
