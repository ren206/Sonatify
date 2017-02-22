# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  album_id   :integer          not null
#  ord        :integer          not null
#  duration   :integer
#

class Song < ActiveRecord::Base
  validates :title, :album_id, :ord, presence: true
  validates_uniqueness_of :ord, scope: :album_id

  has_many :listings
  has_many :playlists, through: :listings

  belongs_to :album
  has_one :artist, through: :album
end
