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
