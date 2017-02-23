import {
  SET_CURRENT_SONG,
  PLAY_CURRENT_SONG,
  PAUSE_CURRENT_SONG,
  ADD_SONG_TO_QUEUE,
  ADD_PLAYLIST_TO_QUEUE
} from '../actions/queue_actions';

import merge from 'lodash/merge';

const _defaultState = {
  currentSong: {},
  playing: false,
  songs: {},
  order: []

}

export default (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_CURRENT_SONG: {
      return Object.assign(
        {},
        state,
        { currentSong: action.song }
      );
    }
    case PLAY_CURRENT_SONG: {
      return Object.assign(
        {},
        state,
        { playing: true }
      );
    }
    case PAUSE_CURRENT_SONG: {
      return merge(
        {},
        state,
        { playing: false }
      );
    }
    case ADD_SONG_TO_QUEUE: {
      let newQueue = merge(
        {},
        state,
        { songs: { [action.song.id]: action.song } }
      );
      newQueue.order.push(action.song.id);
      return newQueue;
    }
    case ADD_PLAYLIST_TO_QUEUE: {
      let newQueue = merge(
        {},
        state
      );
      action.playlist.songs.forEach(song => {
        newQueue.order.push(song.id);
        newQueue.songs[song.id] = song;
      })
      return newQueue;
    }
    default: {
      return state;
    }
  }
};
