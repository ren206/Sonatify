json.extract! playlist, :name, :user_id, :id

json.owned playlist.owned_by?(current_user)

# json.songs do
#   playlist.songs.each do |song|
#     json.set! song.id do
#       json.partial! 'api/songs/song', song: song
#     end
#   end
# end
json.songs do
    playlist.listings.each do |listing|
      json.set! listing.song.id do
        json.partial! 'api/songs/song', song: listing.song
        json.listingId listing.id
      end
    end
  end

json.image_url asset_path(playlist.image.url)
