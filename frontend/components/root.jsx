import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import App from './app';

import Browse from './web_player/browse/browse';
import Playlists from './web_player/playlists/playlists';

export default ({ store }) => {

  const _redirect = (nextState, replace) => {
    replace('/');
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>

        <Route path="/" component={ App }>
          <Route path="browse" component={ Browse } />
          <Route path="playlists" component={ Playlists } />
        </Route>

        <Route path="/:DNE" onEnter={ _redirect } />
      </Router>
    </Provider>
  )
}
