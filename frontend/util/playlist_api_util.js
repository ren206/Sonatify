export const fetchPlaylist = id => {
  return $.ajax({
    type: 'GET',
    url: `api/playlists/${id}`
  });
};



export const createPlaylist = playlist => {
  return $.ajax({
    type: 'POST',
    url: 'api/playlists',
    playlist
  });
};

export const updatePlaylist = (id, newName) => {
  return $.ajax({
    type: 'PATCH',
    url: `api//playlists/${id}`,
    data: { playlist: { name: newName } },
    dataType: 'JSON'
  });
};

export const deletePlaylist = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlistId}`
  });
};

export const addSongToPlaylist = (playlistId, songId) => {
  return $.ajax({
    type: 'POST',
    url: 'api/playlist_listings',
    data: { playlist_listing: {
      playlist_id: playlistId,
      song_id: songId
    }},
    dataType: 'JSON'
  });
};

export const removeSongFromPlaylist = listingId => {
  return $.ajax({
    type: 'DELETE',
    url: `api/playlist_listings/${listingId}`
  });
};
