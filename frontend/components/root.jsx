import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import App from './app';

import Browse from './web_player/browse';
import YourMusic from './web_player/your_music';
import Playlist from './web_player/playlist';

export default ({ store }) => {

  const _redirect = (nextState, replace) => {
    replace('/');
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>

        <Route path="/" component={ App }>
          <Route path="browse" component={ Browse } />
          <Route path="your-music" component={ YourMusic } />
          <Route path="playlists/:playlistId" component={ Playlist } />
        </Route>

        <Route path="/:DNE" onEnter={ _redirect } />
      </Router>
    </Provider>
  )
}
