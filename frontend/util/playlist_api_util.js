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
    playlist
  });
};

export const updatePlaylist = (playlistId, newName) => {
  return $.ajax({
    type: 'PATCH',
    url: `api//playlists/${playlistId}`,
    data: { playlist: { name: newName } },
    dataType: 'JSON'
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
    }},
    dataType: 'JSON'
  });
};

export const removeListing = listingId => {
  return $.ajax({
    type: 'DELETE',
    url: `api/listings/${listingId}`
  });
};
