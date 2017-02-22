# == Schema Information
#
# Table name: listings
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Listing < ActiveRecord::Base
  validates :playlist, :song, presence: true

  belongs_to :playlist
  belongs_to :song
end
