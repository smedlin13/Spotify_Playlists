class Playlist < ApplicationRecord
  validates :img, :title, presence: true

  
end
