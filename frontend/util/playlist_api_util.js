export const fetchPlaylists = playlist => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlists',
    playlist
  });
};

export const fetchPlaylist = id => {
  return $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`
  });
};



export const createPlaylist = playlist => {
  return $.ajax({
    method: 'POST',
    url: 'api/playlists',
    playlist
  });
};

export const updatePlaylist = (id, newName) => {
  return $.ajax({
    method: 'patch',
    url: `api//playlists/${id}`,
    data: { playlist: { name: newName } },
    dataType: 'JSON'
  });
};

export const addSongToPlaylist = (playlistId, songId) => {
  return $.ajax({
    method: 'post',
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
    method: 'delete',
    url: `api/playlist_listings/${listingId}`
  });
};
