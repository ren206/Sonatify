# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ActiveRecord::Base
  validates :name, presence: true, uniquness: true

  has_many :albums, dependent: :delete_all
  has_many :songs, through: :albums
  
end
