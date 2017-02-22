class AddAlbumInfoToSong < ActiveRecord::Migration
  def change
    add_column :songs, :album_id, :integer, null: false, unique: true, index: true
    add_column :songs, :ord, :integer, null: false, unique: true
  end
end
