class Artist < ApplicationRecord
  belongs_to :playlist
  validates :name, :desc, presence: :true
end
