export const fetchPlaylists = username => {
  return $.ajax({
    type: 'GET',
    url: `api/users/${username}/playlists`
  });
};

export const fetchPlaylist = playlistId => {
  return $.ajax({
    type: 'GET',
    url: `api/playlists/${playlistId}`
  });
};

export const createPlaylist = playlist => {
  return $.ajax({
    type: 'POST',
    url: 'api/playlists',
    data: { playlist }
  });
};

export const renamePlaylist = (playlistId, newName) => {
  return $.ajax({
    type: 'PATCH',
    url: `api//playlists/${playlistId}`,
    data: { playlist: { name: newName } }
  });
};

export const deletePlaylist = playlistId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlistId}`
  });
};

export const createListing = (playlistId, songId) => {
  return $.ajax({
    type: 'POST',
    url: 'api/listings',
    data: { listing: {
      playlist_id: playlistId,
      song_id: songId
    }}
  });
};

export const removeListing = listingId => {
  return $.ajax({
    type: 'DELETE',
    url: `api/listings/${listingId}`
  });
};
