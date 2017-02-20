import {
  RECEIVE_PLAYLIST,
RECEIVE_PLAYLIST_WITHOUT_SONG 
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

    default:
      return state;
  }
};
