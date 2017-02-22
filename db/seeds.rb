User.find_or_create_by(username: "guest"
  password_digest: "$2a$10$ivFZmFpmMRjijSFpeo.QCO1enzsfNJWZp/9PsMXZrG17OfI5ChVRW",
  f_name: "Guest",
  l_name: "User"
)
User.find_or_create_by(username: "michael"
  password_digest: "$2a$10$LzMd2UIgX/NmNILhp1SNHO2qZ5qbeLqYNZseXyHmUy3CME5XSZxhy",
  f_name: "Michael",
  l_name: "Ren"
)
Playlist.destroy_all
rec = Playlist.create(
  name: 'Recommended for You',
  user_id: User.find_by_username("michael").id
)

Artist.destroy_all

Artist.create(
  name: "John Sayles"
)
Artist.create(
  name: "Morgan Greig"
)
Artist.create(
  name: "Angelwing"
)

Album.destroy_all

Album.create(
  name: "Classical Songs",
  artist_id: Artist.find_by_name("John Sayles").id,
  year: 1700
)

Album.create(
  name: "Blues Songs",
  artist_id: Artist.find_by_name("Morgan Greig").id,
  year: 1950
)

Album.create(
  name: "Rock Instrumental Music",
  artist_id: Artist.find_by_name("Angelwing").id,
  year: 1970
)

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
# Song.create!(
#   title: "Tammy Morgan",
#   album_id: Album.find_by_name("Blues Songs").id,
#   ord: 1,
#   audio: File.open('app/assets/songs/Tammy-Morgan+Greig.mp3')
# )
# Song.create!(
#   title: "What's Left",
#   album_id: Album.find_by_name("Blues Songs").id,
#   ord: 2,
#   audio: File.open('app/assets/songs/WhatsLeft-Morgan+Greig.mp3')
# )
Song.create!(
  title: "The Calling",
  album_id: Album.find_by_name("Rock Instrumental Music").id,
  ord: 2,
  audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/theCalling-Angelwing.mp3'
)

Listing.destroy_all

Listing.create(
  playlist_id: rec.id,
  song_id: Song.find_by_title("Double Violin Concerto by JS Bach")
)
Listing.create(
  playlist_id: rec.id,
  song_id: Song.find_by_title("Courante 1st Cello Suite by JS Bach")
)
# Listing.create(
#   playlist_id: rec.id,
#   song_id: Song.find_by_title("Tammy Morgan")
# )
# Listing.create(
#   playlist_id: rec.id,
#   song_id: Song.find_by_title("What's Left")
# )
Listing.create(
  playlist_id: rec.id,
  song_id: Song.find_by_title("The Calling")
)
