import {
  RECEIVE_PLAYLISTS,
  RECEIVE_NEW_PLAYLIST,
  RECEIVE_DELETED_PLAYLIST
  RECEIVE_PLAYLIST,
  RECEIVE_PLAYLIST_WITHOUT_SONG,
  START_LOADING_PLAYLISTS,
  START_LOADING_PLAYLIST
} from '../actions/playlist_actions';

const _initialState = {
  loading = false;
};

export default (state = _initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case START_LOADING_PLAYLISTS:
    case START_LOADING_PLAYLIST:
    return Object.assign(
      {},
      state,
      { loading = true }
    );
    case RECEIVE_PLAYLISTS:
    case RECEIVE_PLAYLIST:
    case RECEIVE_NEW_PLAYLIST:
    case RECEIVE_DELETEDPLAYLIST:
    case RECEIVE_PLAYLIST_WITHOUT_SONG:
      return _initialState;
    default:
      return state;
  }
};
