import {
  RECEIVE_PLAYLIST,
RECEIVE_PLAYLIST_WITHOUT_SONG
} from '../actions/playlist_actions';

import merge from 'lodash/merge';

const _initialState = {
  playlist: {}
};

export default (state = _initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
