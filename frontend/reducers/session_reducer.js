import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  LOGOUT
} from '../actions/session_actions';

import {
  RECEIVE_NEW_PLAYLIST, // Update name of playlist
  RECEIVE_DELETED_PLAYLIST
} from '../actions/playlist_actions';

import merge from 'lodash/merge';

const _initialState = {
  currentUser: null,
  errors: []
};

export default (state = _initialState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, {
        currentUser
      });

    case LOGOUT:
      return merge({}, state);

    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });

    case CLEAR_ERRORS:
      return Object.assign({}, state, { errors: [] });

    case RECEIVE_NEW_PLAYLIST:
      const newUserWithPlaylists = Object.assign( {}, state.currentUser );
      newUserWithPlaylists.playlists = merge(
        {},
        state.currentUser.playlists,
        { [action.playlist.id]: action.playlist }
      );
      return Object.assign(
        {},
        state,
        { currentUser: newUserWithPlaylists }
      );

    case RECEIVE_DELETED_PLAYLIST:
      const newUserWithDeletedPlaylist = Object.assign({}, state.currentUser);
      delete newUserWithDeletedPlaylist.playlists[action.playlistId];
      return Object.assign(
        {},
        state,
        { currentUser: newUserWithDeletedPlaylist }
      );

    default:
      return state;
  }
};
