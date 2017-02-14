```javascript

{

  currentUser: {
    username: "guestuser"
  },

  errors: {
    session: {},
  },

  currentSong: {
    song: {
      id: 999,
      title: "Song Title",
      artist: "Some Artist",
      album: "Some Album",
      media_url: "http://song.url",
      album_cover_url: "http://album.cover.url"
    }
  }

  mainQueue: {
    1: {
      id: 500,
      title: "Next Song Title",
      artist: "Next Artist",
      media_url: "http://nextsong.url",
      album_cover_url: "http://album.cover.url",
    },
    2: {
      id: 1000,
      title: "Another Song Title",
      artist: "Another Artist",
      media_url: "http://anothersong.url",
      album_cover_url: "http://album.cover.url",
    },
  },

  playlistQueue: {
    id: 50,
    user_id: 1,
    name: "first playlist",
    queue: {
      1: {
        id: 500,
        title: "Next Song Title",
        artist: "Next Artist",
        media_url: "http://nextsong.url",
        album_cover_url: "http://album.cover.url",
      },
      2: {
        id: 1000,
        title: "Another Song Title",
        artist: "Another Artist",
        media_url: "http://anothersong.url",
        album_cover_url: "http://album.cover.url",
      },
      3: {
        id: 2000,
        title: "One More Song Title",
        artist: "One More Artist",
        media_url: "http://onemoresong.url",
        album_cover_url: "http://album.cover.url",
      },
    },
  },

  playlistView: { },
  artistView: { },
  albumView: { },
  genreView: { },
  userView: { },

}

```
