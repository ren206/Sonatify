# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ActiveRecord::Base
  validates :name, :owner_id, presence: true

  belongs_to :owner, class_name: :User, foreign_key: :owner_id

  has_many :listings
  has_many :songs, through: :listings
end
