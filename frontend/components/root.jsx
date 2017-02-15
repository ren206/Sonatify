import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app/app';
import Splash from './splash/splash';

export default function Root({ store }) {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) replace('/browse');
  }

  const _ensureLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) replace('/');
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
          <Route path="/" component={ Splash } onEnter={_redirectIfLoggedIn} />
          <Route path="/browse" component={ App } onEnter={_ensureLoggedIn} />

          <Route path="/:DNE" onEnter={_redirectIfLoggedIn}/>
      </Router>
    </Provider>
  )
}
// <Route onEnter={ _redirectIfLoggedIn }>
//   <Route path="/login" component={ SessionFormContainer } />
//   <Route path="/signup" component={ SessionFormContainer } />
