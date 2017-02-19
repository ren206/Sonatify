import React from 'react';
import { connect } from 'react-redux';

import Splash from './splash/splash';
import WebPlayer from './web_player/web_player';

const App = ({ session, children }) => {
  return (
    session.currentUser ? <WebPlayer children={children}/> : <Splash />
  );
}

const mapStateToProps = ({ session }) => {
  return { session }
}

export default connect(
  mapStateToProps
)(App);
