import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash/splash';
import Browse from './browse/browse';

export default ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser)replace('/browse');
  }

  const _ensureLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) replace('/');
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
        <IndexRoute component={ Splash } onEnter={ _redirectIfLoggedIn } />
        <Route path="/browse" component={ Browse } onEnter={ _ensureLoggedIn } />

        <Route path="/:DNE" onEnter={_redirectIfLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  )
}
