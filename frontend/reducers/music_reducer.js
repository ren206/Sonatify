import {
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS,
  RECEIVE_ALBUM
} from '../actions/music_actions';

import { LOGOUT } from '../actions/session_actions';

import { merge } from 'lodash';

const defaultState = {
  artists: {},
  artist: {},
  album: {}
};

export default (state = defaultState, action) => {
  switch(action.type) {

    case LOGOUT:
      return defaultState;

    case RECEIVE_ARTISTS:
      return merge(
        {},
        state,
        { artists: action.artists }
      );

    case RECEIVE_ARTIST:
      return Object.assign(
        {}, state,
        { artist: action.artist }
      );

    case RECEIVE_ALBUM:
      return Object.assign(
        {},
        state,
        { album: action.album }
      );

    default:
      return state;
  }
}
