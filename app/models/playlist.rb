# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string           not null
#  user_id    :integer          not null
#

class Playlist < ActiveRecord::Base
  validates :name, :user_id, presence: true

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "logo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user

  has_many :listings, dependent: :delete_all
  has_many :songs, through: :listings

  def self.get_by_username(username)
    Playlist
      .includes(:songs)
      .joins("JOIN users ON users.id = playlists.user_id")
      .where("users.username = ?", username)
  end
end
