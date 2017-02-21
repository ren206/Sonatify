import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  // TODO: comment back in after finished testing
  // let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    // for testing; TODO: remove
    window.store = configureStore(preloadedState);
  } else {
    window.store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

import fetchPlaylists from './util/playlist_api_util';
window.fetchPlaylists = fetchPlaylists;
