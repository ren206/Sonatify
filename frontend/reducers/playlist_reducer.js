// _RU_-ing (listening) to playlists happens in the player
import {
  RECEIVE_PLAYLIST,
  RECEIVE_PLAYLIST_WITHOUT_SONG
} from '../actions/playlist_actions';

import { LOGOUT } from '../actions/session_actions';

import merge from 'lodash/merge';

const _initialState = {};

export default (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT:
      return _initialState;

    case RECEIVE_PLAYLIST:
      return action.playlist;

    case RECEIVE_PLAYLIST_WITHOUT_SONG:
      const newPlaylist = merge(
        {},
        state,
      );

      delete newPlaylist.songs[action.listing.song_id];

      return newPlaylist;

    default:
      return state;
  }
};
