import { combineReducers } from 'redux';
import session from './session_reducer';
import playlist from './playlist_reducer';
import playlists from './playlists_reducer';

export default combineReducers( { session, playlist, playlists } );
