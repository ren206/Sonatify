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

Artist.find_or_create_by(
  name: "John Sayles"
)
Artist.find_or_create_by(
  name: "Angelwing"
)

Album.destroy_all # TODO: remove this line

Album.find_or_create_by(name: "Classical Songs") do |album|
  album.artist_id = Artist.find_by_name("John Sayles").id
  album.year = 1700
end

Album.find_or_create_by(name: "Soothing Instrumentals") do |album|
  album.artist_id = Artist.find_by_name("Angelwing").id
  album.year = 1970
end

Song.destroy_all

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

Listing.destroy_all

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
