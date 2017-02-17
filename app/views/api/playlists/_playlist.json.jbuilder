json.extract! playlist, :name, :owner_id

json.songs do
  json.array! @playlist.songs, partial: 'api/songs/song', as: :song
end
