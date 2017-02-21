import {
  RECEIVE_PLAYLISTS
} from '../actions/playlist_actions';

import merge from 'lodash/merge';

const _initialState = {};

export default (state = _initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return _initialState;

    case RECEIVE_PLAYLISTS:
      return action.playlists;

    default:
      return state;
  }
};
