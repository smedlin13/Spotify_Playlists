class Playlist < ApplicationRecord
  has_many :artists, dependent: :destroy
  validates :img, :title, presence: true

  
end
