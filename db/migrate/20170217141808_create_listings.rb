class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false
      t.timestamps null: false
    end

    add_index :listings, :playlist_id
    add_index :listings, :song_id
  end
end
