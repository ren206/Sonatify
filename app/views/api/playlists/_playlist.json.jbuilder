json.extract! playlist, :name, :user_id, :id

json.songs do
  json.array! playlist.songs, partial: 'api/songs/song', as: :song
end

json.image_url asset_path(playlist.image.url)
