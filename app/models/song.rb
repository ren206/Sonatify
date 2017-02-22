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
#

class Song < ActiveRecord::Base
  validates :title, presence: true

  has_many :listings
  has_many :playlists, through: :listings
end
