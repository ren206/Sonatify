User.find_or_create_by(username: "guest") do |user|
  user.password_digest = "$2a$10$ivFZmFpmMRjijSFpeo.QCO1enzsfNJWZp/9PsMXZrG17OfI5ChVRW"
  user.f_name = "Guest"
  user.l_name = "User"
end

User.find_or_create_by(username: "michael") do |user|
  user.password_digest = "$2a$10$LzMd2UIgX/NmNILhp1SNHO2qZ5qbeLqYNZseXyHmUy3CME5XSZxhy"
  user.f_name = "Michael"
  user.l_name = "Ren"
end

Playlist.find_or_create_by(name: 'Recommended for You') do |playlist|
  playlist.user_id = User.find_by_username("michael").id
end

Artist.find_or_create_by(name: "John Sayles")
Artist.find_or_create_by(name: "Angelwing")
Artist.find_or_create_by(name: "Zeropage")
Artist.find_or_create_by(name: "Matt Confusion")
Artist.find_or_create_by(name: "Mickey Blue")
Artist.find_or_create_by(name: "Dofhei Project")
Artist.find_or_create_by(name: "Alex Che")
Artist.find_or_create_by(name: "Alexey Anisimov")
Artist.find_or_create_by(name: "Mattia Vlad Morleo")


Album.find_or_create_by(name: "Classical Songs") do |album|
  album.artist_id = Artist.find_by_name("John Sayles").id
  album.year = 1700
end

Album.find_or_create_by(name: "Soothing Instrumentals") do |album|
  album.artist_id = Artist.find_by_name("Angelwing").id
  album.year = 1970
end

Album.find_or_create_by(name: "Another Effect") do |album|
  album.artist_id = Artist.find_by_name("Zeropage").id
  album.year = 2017
end
Album.find_or_create_by(name: "Epic Collection") do |album|
  album.artist_id = Artist.find_by_name("Alex Che").id
  album.year = 2016
end


Song.destroy_all
Listing.destroy_all

Song.create!(
  title: "Double Violin Concerto by JS Bach",
  album_id: Album.find_by_name("Classical Songs").id,
  ord: 1,
  audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Double-Violin-Concerto_JSBach-Jon-Sayles.mp3'
)

Song.create!(
  title: "Courante 1st Cello Suite by JS Bach",
  album_id: Album.find_by_name("Classical Songs").id,
  ord: 2,
  audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Courante_1st_Cello_Suite_JS_Bach-Jon-Sayles.mp3'
)

Song.create!(
  title: "The Calling",
  album_id: Album.find_by_name("Soothing Instrumentals").id,
  ord: 1,
  audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/theCalling-Angelwing.mp3'
)
Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("Double Violin Concerto by JS Bach").id
)
Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("Courante 1st Cello Suite by JS Bach").id
)
Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("The Calling").id
)

# Album - Another Effect

Song.create!(
  title: "Another Effect",
  album_id: Album.find_by_name("Another Effect").id,
  ord: 1,
  audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/01+-+Zeropage+-+Another+Effect.mp3'
)
Song.create!(
  title: "Ambient Sequence",
  album_id: Album.find_by_name("Another Effect").id,
  ord: 2,
  audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/02+-+Zeropage+-+Ambient+Sequence.mp3'
)
# Song.create!(
#   title: "Ordinary Matter",
#   album_id: Album.find_by_name("Another Effect").id,
#   ord: 3,
#   audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/03+-+Zeropage+-+Ordinary+Matter.mp3'
# )
# Song.create!(
#   title: "Different Modules",
#   album_id: Album.find_by_name("Another Effect").id,
#   ord: 4,
#   audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/04+-+Zeropage+-+Different+Modules.mp3'
# )
# Song.create!(
#   title: "Electric Circuits",
#   album_id: Album.find_by_name("Another Effect").id,
#   ord: 5,
#   audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/01+-+Zeropage+-+Electric+Circuits.mp3'
# )
# Song.create!(
#   title: "True Dubification",
#   album_id: Album.find_by_name("Another Effect").id,
#   ord: 6,
#   audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/01+-+Zeropage+-+True+Dubification.mp3'
# )
# Song.create!(
#   title: "The Thing Comes Over Me",
#   album_id: Album.find_by_name("Another Effect").id,
#   ord: 7,
#   audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/01+-+Zeropage+-+The+Thing+Comes+Over+Me.mp3'
# )

Listing.create!(
  playlist_id: Playlist.find_by_name("Recommended for You").id,
  song_id: Song.find_by_title("Another Effect").id
)
Listing.create!(
  playlist_id: Playlist.find_by_name("Recommended for You").id,
  song_id: Song.find_by_title("Ambient Sequence").id
)
# Listing.create!(
#   playlist_id: Playlist.find_by_name("Recommended for You").id,
#   song_id: Song.find_by_title("Ordinary Matter").id
# )
# Listing.create!(
#   playlist_id: Playlist.find_by_name("Recommended for You").id,
#   song_id: Song.find_by_title("Different Modules").id
# )
# Listing.create!(
#   playlist_id: Playlist.find_by_name("Recommended for You").id,
#   song_id: Song.find_by_title("Electric Circuits").id
# )
# Listing.create!(
#   playlist_id: Playlist.find_by_name("Recommended for You").id,
#   song_id: Song.find_by_title("True Dubification").id
# )
# Listing.create!(
#   playlist_id: Playlist.find_by_name("Recommended for You").id,
#   song_id: Song.find_by_title("The Thing Comes Over Me").id
# )

Song.create!(
title: "Grand Epic",
album_id: Album.find_by_name("Epic Collection").id,
ord: 1,
audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Alex_Che_-_Grand_Epic.mp3'
)

Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("Grand Epic").id
)
