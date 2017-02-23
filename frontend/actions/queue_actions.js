export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const PLAY_CURRENT_SONG = "PLAY_CURRENT_SONG";
export const PAUSE_CURRENT_SONG = "PAUSE_CURRENT_SONG";
export const ADD_SONG_TO_QUEUE = "ADD_SONG_TO_QUEUE";
export const ADD_PLAYLIST_TO_QUEUE = "ADD_PLAYLIST_TO_QUEUE";

export const setCurrentSong = song => ({
  type: SET_CURRENT_SONG,
  song
})

export const playCurrentSong = () => ({
  type: PLAY_CURRENT_SONG
})

export const pauseCurrentSong = () => ({
  type: PAUSE_CURRENT_SONG
})


export const addSongToQueue = song => {
  return ({
    type: "ADD_SONG_TO_QUEUE",
    song
  })
}

export const addPlaylistToQueue = playlist => {
  return ({
    type: "ADD_PLAYLIST_TO_QUEUE",
    playlist
  })
}
