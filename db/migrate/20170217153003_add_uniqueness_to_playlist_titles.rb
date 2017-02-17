class AddUniquenessToPlaylistTitles < ActiveRecord::Migration
  def change
    remove_column :playlists, :name, :string, null: false, index: true
    add_column :playlists, :name, :string, null: false, unique: true, index: true
  end
end
