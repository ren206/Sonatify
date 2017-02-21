// _RU_-ing (listening) to playlists happens in the player
import {
  RECEIVE_PLAYLIST,
  RECEIVE_PLAYLIST_WITHOUT_SONG
} from '../actions/playlist_actions';

import { LOGOUT } from '../actions/session_actions';

import merge from 'lodash/merge';

const _initialState = {};

export default (state = _initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return _initialState;

    case RECEIVE_PLAYLIST:
      return action.playlist;

    case RECEIVE_PLAYLIST_WITHOUT_SONG:
      const newPlaylist = Object.assign(
        {},
        state,
      );

      delete newPlaylist[action.song_id];

      return newPlaylist;

    default:
      return state;
  }
};
