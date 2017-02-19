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
  validates :name, :user_id, presence: true

  belongs_to :user

  has_many :listings, dependent: :delete_all
  has_many :songs, through: :listings
end
