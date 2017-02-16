# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  f_name          :string           not null
#  l_name          :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :f_name, :l_name, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates_format_of :username, with: /[A-Za-z0-9]+/
  validates_format_of :f_name, :l_name, with: /[a-z]+/i


  after_initialize :ensure_session_token

  attr_reader :password

  # user followings associations
  has_many :in_follows, class_name: "Follow", foreign_key: "followee_id"
  has_many :out_follows, class_name: "Follow", foreign_key: "follower_id"
  has_many :followers, through: :in_follows, source: :follower
  has_many :followees, through: :out_follows, source: :followee

  def self.find_by_credentials(credentials)
    user = User.find_by_username(credentials[:username])
    user && user.is_password?(credentials[:password]) ? user : nil
  end

  def self.random_token
    SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = User.random_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.random_token
  end
end
