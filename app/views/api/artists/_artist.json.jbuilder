json.extract! artist, :id, :name
json.albums artist.albums do |album|
  json.partial! 'api/albums/album', album: album
end
