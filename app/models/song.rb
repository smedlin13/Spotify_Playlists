class Song < ApplicationRecord
  belongs_to :artist

  validates :title, :length, presence: :true

end