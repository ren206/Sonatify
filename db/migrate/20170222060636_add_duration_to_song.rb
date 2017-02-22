class AddDurationToSong < ActiveRecord::Migration
  def change
    add_column :songs, :duration, :integer, null: false
  end
end
