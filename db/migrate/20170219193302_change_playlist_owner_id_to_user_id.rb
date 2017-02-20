class ChangePlaylistOwnerIdToUserId < ActiveRecord::Migration
  def change
    remove_column :playlists, :owner_id, :integer, null: false, index: true
    add_column :playlists, :user_id, :integer, null: false, unique: true, index: true
  end
end
