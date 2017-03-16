# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  artist_id  :integer          not null
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ActiveRecord::Base
  validates :name, :artist, presence: true

  belongs_to :artist
  has_many :songs, dependent: :delete_all

  has_attached_file :cover, default_url: "logo.png"
  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\z/
end
