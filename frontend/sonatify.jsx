import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Sonatify</h1>, root);
});

// testing session api ajax calls

import * as SessionAPIUtil from './util/session_api_util';
window.signup = SessionAPIUtil.signup;
window.login = SessionAPIUtil.login;
window.logout = SessionAPIUtil.logout;


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Root from './components/root';
// import configureStore from './store/store';
//
// document.addEventListener("DOMContentLoaded", () => {
//   let store;
//   if (window.currentUser) {
//     const preloadedState = { session: { currentUser: window.currentUser } };
//     store = configureStore(preloadedState);
//   } else {
//     store = configureStore();
//   }
//   const root = document.getElementById('root');
//   ReactDOM.render(<Root store={ store }/>, root);
// });
