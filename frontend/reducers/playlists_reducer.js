import {
  RECEIVE_PLAYLISTS,
  RECEIVE_NEW_PLAYLIST,
  RECEIVE_DELETED_PLAYLIST
} from '../actions/playlist_actions';

import merge from 'lodash/merge';

const _initialState = {};

export default (state = _initialState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_PLAYLISTS:
      return action.playlists;

    case RECEIVE_NEW_PLAYLIST:
      return Object.assign(
        {},
        state,
        { [action.playlist.id]: action.playlist }
      );

    case RECEIVE_DELETED_PLAYLIST:
      const newPlaylists = Object.assign(
        {},
        state
      );

      delete newPlaylists[action.playlistId]
      return newPlaylists;
      
    default:
      return state;
  }
};
