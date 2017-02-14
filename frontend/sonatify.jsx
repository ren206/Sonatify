import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  // let store;
  // if (window.currentUser) {
  //   const preloadedState = { session: { currentUser: window.currentUser } };
  //   store = configureStore(preloadedState);
  // } else {
  //   store = configureStore();
  // }
  window.store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h2>Welcome to Sonatify</h2>, root);
});
