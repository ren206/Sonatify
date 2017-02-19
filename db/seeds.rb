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

unless Playlist.find_by(name: "Recommended for You")
  rec = Playlist.create(
    name: 'Recommended for You',
    owner_id: 10
  )
  test = Playlist.create(
    name: 'Test Playlist',
    owner_id: 10
  )
end

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
  song_id: a.id,
  ord: 1
)

Listing.create(
  playlist_id: rec.id,
  song_id: b.id,
  ord: 2
)

Listing.create(
  playlist_id: rec.id,
  song_id: c.id,
  ord: 3
)

Listing.create(
  playlist_id: rec.id,
  song_id: d.id,
  ord: 4
)

Listing.create(
  playlist_id: rec.id,
  song_id: e.id,
  ord: 5
)

Listing.create(
  playlist_id: test.id,
  song_id: d.id,
  ord: 1
)

Listing.create(
  playlist_id: test.id,
  song_id: e.id,
  ord: 2
)

Listing.create(
  playlist_id: test.id,
  song_id: f.id,
  ord: 3
)

Listing.create(
  playlist_id: test.id,
  song_id: g.id,
  ord: 4
)
