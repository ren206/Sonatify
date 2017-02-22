unless User.find_by(username: "guest")
  User.create(
    username: "guest",
    password_digest: "$2a$10$ivFZmFpmMRjijSFpeo.QCO1enzsfNJWZp/9PsMXZrG17OfI5ChVRW",
    f_name: "Guest",
    l_name: "User"
  )
end

unless User.find_by(username: "michael")
  User.create(
    username: "michael",
    password_digest: "$2a$10$LzMd2UIgX/NmNILhp1SNHO2qZ5qbeLqYNZseXyHmUy3CME5XSZxhy",
    f_name: "Michael",
    l_name: "Ren"
  )
end

Playlist.destroy_all
rec = Playlist.create(
  name: 'Recommended for You',
  user_id: 10
)
test = Playlist.create(
  name: 'Test Playlist',
  user_id: 10
)

Song.destroy_all

a = Song.create(title: 'A Sky Full of Stars')
b = Song.create(title: 'Better Together')
c = Song.create(title: 'Carry on Wayward Son')
d = Song.create(title: 'Dare You to Move')
e = Song.create(title: 'Escape (The Pina Colada Song)')

f = Song.create(title: 'Fly Me to the Moon')
g = Song.create(title: 'Georgia on My Mind')

Listing.destroy_all

Listing.create(
  playlist_id: rec.id,
  song_id: a.id
)

Listing.create(
  playlist_id: rec.id,
  song_id: b.id
)

Listing.create(
  playlist_id: rec.id,
  song_id: c.id
)

Listing.create(
  playlist_id: rec.id,
  song_id: d.id
)

Listing.create(
  playlist_id: rec.id,
  song_id: e.id
)

Listing.create(
  playlist_id: test.id,
  song_id: d.id
)

Listing.create(
  playlist_id: test.id,
  song_id: e.id
)

Listing.create(
  playlist_id: test.id,
  song_id: f.id
)

Listing.create(
  playlist_id: test.id,
  song_id: g.id
)
