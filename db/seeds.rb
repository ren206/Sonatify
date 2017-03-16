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

Playlist.find_or_create_by(name: 'My Favorites') do |playlist|
  playlist.user_id = User.find_by_username("guest").id
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
Artist.find_or_create_by(name: "The Moose")
Artist.find_or_create_by(name: "Mickey Blue")
Artist.find_or_create_by(name: "THE.MADPIX.PROJECT")
Artist.find_or_create_by(name: "Brain Purist")
Artist.find_or_create_by(name: "The Brothers")


# Album.delete_all

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
  album.cover = 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Another-Effect.jpg'
end

Album.find_or_create_by(name: "Epic Collection") do |album|
  album.artist_id = Artist.find_by_name("Alex Che").id
  album.year = 2016
  album.cover = 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Epic-Collection.jpg'
end

Album.find_or_create_by(name: "The Flying of a Leaf") do |album|
  album.artist_id = Artist.find_by_name("Mattia Vlad Morleo").id
  album.year = 2016
  album.cover = 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/the-flying-of-a-leaf.jpg'
end

Album.find_or_create_by(name: "Passando") do |album|
  album.artist_id = Artist.find_by_name("Mattia Vlad Morleo").id
  album.year = 2016
  album.cover = 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Passando.jpg'
end

Album.find_or_create_by(name: "Scandanavian Sound") do |album|
  album.artist_id = Artist.find_by_name("The Moose").id
  album.year = 2017
  album.cover = 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Scandanavian-Sound.jpg'
end

Album.find_or_create_by(name: "Give Yourself Away") do |album|
  album.artist_id = Artist.find_by_name("Mickey Blue").id
  album.year = 2016
  album.cover = 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Give+Yourself+Away.jpg'
end

Album.find_or_create_by(name: "Kind of Light") do |album|
  album.artist_id = Artist.find_by_name("Dofhei Project").id
  album.year = 2017
  album.cover = 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Kind-of-light.jpg'
end

Album.find_or_create_by(name: "TMP") do |album|
  album.artist_id = Artist.find_by_name("THE.MADPIX.PROJECT").id
  album.year = 2016
  album.cover = 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/TMP.jpg'
end

Album.find_or_create_by(name: "Curse the Day") do |album|
  album.artist_id = Artist.find_by_name("Brain Purist").id
  album.year = 2016
  album.cover = 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Curse-The-Day.jpg'
end

Album.find_or_create_by(name: "Hobo Blues") do |album|
  album.artist_id = Artist.find_by_name("The Brothers").id
  album.year = 2016
  album.cover = 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/hobo-blues.jpg'
end


Song.delete_all
Listing.delete_all

Song.create!(
title: "Double Violin Concerto by JS Bach",
album_id: Album.find_by_name("Classical Songs").id,
ord: 1,
audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Double-Violin-Concerto_JSBach-Jon-Sayles.mp3'
)
# Song.find_or_create_by(audio_file_name: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Double-Violin-Concerto_JSBach-Jon-Sayles.mp3') do |song|
#   song.title = "Double Violin Concerto by JS Bach"
#   song.album_id = Album.find_by_name("Classical Songs").id
#   song.ord = 1
# end

Song.create!(
title: "Courante 1st Cello Suite by JS Bach",
album_id: Album.find_by_name("Classical Songs").id,
ord: 2,
audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Courante_1st_Cello_Suite_JS_Bach-Jon-Sayles.mp3'
)
# Song.find_or_create_by(audio_file_name: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Courante_1st_Cello_Suite_JS_Bach-Jon-Sayles.mp3') do |song|
#   song.title = "Courante 1st Cello Suite by JS Bach"
#   song.album_id = Album.find_by_name("Classical Songs").id
#   song.ord = 2
# end

# Song.create!(
#   title: "The Calling",
#   album_id: Album.find_by_name("Soothing Instrumentals").id,
#   ord: 1,
#   audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/theCalling-Angelwing.mp3'
# )
# Listing.create!(
# playlist_id: Playlist.find_by_name("Recommended for You").id,
# song_id: Song.find_by_title("The Calling").id
# )

# Song.find_or_create_by(audio_file_name: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/theCalling-Angelwing.mp3') do |song|
#   song.title = "The Calling"
#   song.album_id = Album.find_by_name("Soothing Instrumentals").id
#   song.ord = 1
# end

Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("Double Violin Concerto by JS Bach").id
)
Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("Courante 1st Cello Suite by JS Bach").id
)

# Album - Another Effect

Song.create!(
  title: "Another Effect",
  album_id: Album.find_by_name("Another Effect").id,
  ord: 1,
  audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/01+-+Zeropage+-+Another+Effect.mp3'
)
# Song.find_or_create_by(audio_file_name: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/01+-+Zeropage+-+Another+Effect.mp3') do |song|
#   song.title = "Another Effect"
#   song.album_id = Album.find_by_name("Another Effect").id
#   song.ord = 1
# end
Song.create!(
  title: "Ambient Sequence",
  album_id: Album.find_by_name("Another Effect").id,
  ord: 2,
  audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/02+-+Zeropage+-+Ambient+Sequence.mp3'
)
# Song.find_or_create_by(audio_file_name: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/02+-+Zeropage+-+Ambient+Sequence.mp3') do |song|
#   song.title = "Ambient Sequence"
#   song.album_id = Album.find_by_name("Another Effect").id
#   song.ord = 2
# end
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
# Song.find_or_create_by(audio_file_name: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Alex_Che_-_Grand_Epic.mp3') do |song|
#   song.title = "Grand Epic"
#   song.album_id = Album.find_by_name("Epic Collection").id
#   song.ord = 1
# end

Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("Grand Epic").id
)

Song.create!(
title: "The Flying of a Leaf",
album_id: Album.find_by_name("The Flying of a Leaf").id,
ord: 1,
audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Mattia_Vlad_Morleo_-_The_Flying_of_a_Leaf.mp3'
)
Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("The Flying of a Leaf").id
)

Song.create!(
title: "Passando",
album_id: Album.find_by_name("Passando").id,
ord: 1,
audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Mattia_Vlad_Morleo_-_Passando.mp3'
)
Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("Passando").id
)

Song.create!(
title: "With You",
album_id: Album.find_by_name("Scandanavian Sound").id,
ord: 1,
audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/The_Moose-With_You.mp3'
)
Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("With You").id
)

Song.create!(
title: "We Got the Love",
album_id: Album.find_by_name("Scandanavian Sound").id,
ord: 2,
audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/The_Moose-With_You.mp3'
)
Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("We Got the Love").id
)

Song.create!(
title: "Give Yourself Away",
album_id: Album.find_by_name("Give Yourself Away").id,
ord: 1,
audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Mickey_Blue_-_Give_Yourself_Away__Produced_by_Benstar_.mp3'
)
Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("Give Yourself Away").id
)

Song.create!(
title: "Kind of Light",
album_id: Album.find_by_name("Kind of Light").id,
ord: 1,
audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Dofhei_Project_-_Kind_of_light.mp3'
)
Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("Kind of Light").id
)

Song.create!(
title: "Just For A Second",
album_id: Album.find_by_name("TMP").id,
ord: 1,
audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/The.madpix.project_-_Just_For_A_Second.mp3'
)
Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("Just For A Second").id
)

Song.create!(
title: "Curse the Day",
album_id: Album.find_by_name("Curse the Day").id,
ord: 1,
audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/Brain_Purist_-_Curse_the_Day__Radio_Edit_.mp3'
)
Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("Curse the Day").id
)

# Hobo Blues
Song.create!(
title: "Your Way",
album_id: Album.find_by_name("Hobo Blues").id,
ord: 1,
audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/01+-+The+Brothers+-+YOUR+WAY.mp3'
)
Listing.create!(
playlist_id: Playlist.find_by_name("Recommended for You").id,
song_id: Song.find_by_title("Your Way").id
)

# Song.create!(
# title: "Hobo Blues",
# album_id: Album.find_by_name("Hobo Blues").id,
# ord: 2,
# audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/02+-+The+Brothers+-+HOBO+BLUES.mp3'
# )
# Listing.create!(
# playlist_id: Playlist.find_by_name("Recommended for You").id,
# song_id: Song.find_by_title("Hobo Blues").id
# )
#
# Song.create!(
# title: "Mama Blues (feat Dickey F.)",
# album_id: Album.find_by_name("Hobo Blues").id,
# ord: 3,
# audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/03+-+The+Brothers+-+MAMA+BLUES+feat+Dickey+F.mp3'
# )
# Listing.create!(
# playlist_id: Playlist.find_by_name("Recommended for You").id,
# song_id: Song.find_by_title("Mama Blues (feat Dickey F.)").id
# )
#
# Song.create!(
# title: "Broken Heart Blues",
# album_id: Album.find_by_name("Hobo Blues").id,
# ord: 4,
# audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/04+-+The+Brothers+-+BROKEN+HEART+BLUES.mp3'
# )
# Listing.create!(
# playlist_id: Playlist.find_by_name("Recommended for You").id,
# song_id: Song.find_by_title("Broken Heart Blues").id
# )
#
# Song.create!(
# title: "Sweet Little Baby",
# album_id: Album.find_by_name("Hobo Blues").id,
# ord: 5,
# audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/05+-+The+Brothers+-+SWEET+LITTLE+BABY.mp3'
# )
# Listing.create!(
# playlist_id: Playlist.find_by_name("Recommended for You").id,
# song_id: Song.find_by_title("Sweet Little Baby").id
# )
#
# Song.create!(
# title: "Never Go Back",
# album_id: Album.find_by_name("Hobo Blues").id,
# ord: 6,
# audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/06+-+The+Brothers+-+NEVER+GO+BACK.mp3'
# )
# Listing.create!(
# playlist_id: Playlist.find_by_name("Recommended for You").id,
# song_id: Song.find_by_title("Never Go Back").id
# )
#
# Song.create!(
# title: "Talking With My Baby",
# album_id: Album.find_by_name("Hobo Blues").id,
# ord: 7,
# audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/07+-+The+Brothers+-+TALKING+WITH+MY+BABY.mp3'
# )
# Listing.create!(
# playlist_id: Playlist.find_by_name("Recommended for You").id,
# song_id: Song.find_by_title("Talking With My Baby").id
# )
#
# Song.create!(
# title: "My Memories",
# album_id: Album.find_by_name("Hobo Blues").id,
# ord: 8,
# audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/08+-+The+Brothers+-+MY+MEMORIES.mp3'
# )
# Listing.create!(
# playlist_id: Playlist.find_by_name("Recommended for You").id,
# song_id: Song.find_by_title("My Memories").id
# )
#
# Song.create!(
# title: "Fighting Mood",
# album_id: Album.find_by_name("Hobo Blues").id,
# ord: 9,
# audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/09+-+The+Brothers+-+FIGHTING+MOOD.mp3'
# )
# Listing.create!(
# playlist_id: Playlist.find_by_name("Recommended for You").id,
# song_id: Song.find_by_title("Fighting Mood").id
# )
#
# Song.create!(
# title: "Sheila",
# album_id: Album.find_by_name("Hobo Blues").id,
# ord: 10,
# audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/10+-+The+Brothers+-+SHEILA.mp3'
# )
# Listing.create!(
# playlist_id: Playlist.find_by_name("Recommended for You").id,
# song_id: Song.find_by_title("Sheila").id
# )
#
# Song.create!(
# title: "Oh, Baby",
# album_id: Album.find_by_name("Hobo Blues").id,
# ord: 11,
# audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/11+-+The+Brothers+-+OH-BABY.mp3'
# )
# Listing.create!(
# playlist_id: Playlist.find_by_name("Recommended for You").id,
# song_id: Song.find_by_title("Oh, Baby").id
# )
#
# Song.create!(
# title: "If I Had Possession Over Judgment Day (by Robert Johnson)",
# album_id: Album.find_by_name("Hobo Blues").id,
# ord: 12,
# audio: 'https://s3.amazonaws.com/aa-sonatify-dev/seeds/12+-+The+Brothers+-+IF+I+HAD+POSESSION+OVER+JUDGMENT+DAY+_song+by+Robert+Johnson_.mp3'
# )
# Listing.create!(
# playlist_id: Playlist.find_by_name("Recommended for You").id,
# song_id: Song.find_by_title("If I Had Possession Over Judgment Day (by Robert Johnson)").id
# )
