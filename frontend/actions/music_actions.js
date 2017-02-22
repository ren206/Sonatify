import * as APIUtil from '../util/music_api_util';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_SONG = "RECEIVE_SONG";

export const fetchArtist = artistId => dispatch => {
  return APIUtil.fetchArtist(artistId).then(
    artist => dispatch(receiveArtist(artist))
  );
};

export const fetchArtists = () => dispatch => {
  return APIUtil.fetchArtists().then(
    artists => dispatch(receiveArtists(artists))
  );
}

export const fetchAlbum = (albumId) => dispatch => {
  return APIUtil.fetchAlbum(albumId).then(
    album => dispatch(receiveAlbum(album))
  );
}

export const fetchSong = (songId) => dispatch => {
  return APIUtil.fetchSong(songId).then(
    song => dispatch(receiveSong(song))
  );
}

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});
