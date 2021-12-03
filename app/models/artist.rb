class Artist < ApplicationRecord
  belongs_to :playlist
  has_many :songs
  validates :name, :desc, presence: :true
end
