json.extract! song, :id, :title, :artist, :audio

json.album do
  json.partial! 'api/albums/album', album: song.album
end 
