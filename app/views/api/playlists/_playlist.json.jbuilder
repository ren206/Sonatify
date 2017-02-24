json.extract! playlist, :name, :user_id, :id

json.songs do
  playlist.songs.each do |song|
    json.set! song.id do
      json.partial! 'api/songs/song', song: song
    end
  end
end

json.image_url asset_path(playlist.image.url)
