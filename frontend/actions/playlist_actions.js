import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_NEW_PLAYLIST = "RECEIVE_NEW_PLAYLIST";
export const RECEIVE_DELETED_PLAYLIST = "RECEIVE_DELETED_PLAYLIST";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_PLAYLIST_WITHOUT_SONG = "RECEIVE_PLAYLIST_WITHOUT_SONG";

export const fetchPlaylist = playlistId => dispatch => {
  return APIUtil.fetchPlaylist(playlistId).then(
    playlist => dispatch(receivePlaylist(playlist))
  );
}

export const fetchPlaylists = userId => dispatch => {
  return APIUtil.fetchPlaylist(userId).then(
    playlists => dispatch(receivePlaylist(playlists))
  );
}

export const createPlaylist = playlist => dispatch => {
  return APIUtil.createPlaylist(playlist).then(
    playlist => dispatch(receiveNewPlaylist(playlist))
  );
}

export const updatePlaylist = (playlistId, newName) => dispatch => {
  return APIUtil.updatePlaylist(playlistId, newName).then(
    playlist => dispatch(receivePlaylist(playlist))
  );
}

export const deletePlaylist = playlistId => dispatch => {
  return APIUtil.deletePlaylist(playlistId).then(
    () => dispatch(receiveDeletedPlaylistId(playlistId))
  );
}

export const createListing = (playlistId, songId) => dispatch => {
  return APIUtil.createListing(playlistId, songId).then(
    listing => dispatch(receiveListing(listing))
  );
}

export const removeListing = listingId => dispatch => {
  return APIUtil.removeListing(listingId).then(
    listing => dispatch(receivePlaylistWithoutSong(listing))
  );
}

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLIST,
  playlists
});

export const receiveNewPlaylist = playlist => ({
  type: RECEIVE_NEW_PLAYLIST,
  playlist
});

export const receiveDeletedPlaylistId = playlistId => ({
  type: RECEIVE_DELETED_PLAYLIST,
  playlistId
});

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});

export const receivePlaylistWithoutSong = listing => ({
  type: RECEIVE_PLAYLIST_WITHOUT_SONG,
  listing
});
