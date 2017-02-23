import { combineReducers } from 'redux';

import session from './session_reducer';
import playlist from './playlist_reducer';
import playlists from './playlists_reducer';
import music from './music_reducer';
import queue from './queue_reducer';

export default combineReducers(
  {
    session,
    playlist,
    playlists,
    music,
    queue
  }
);
