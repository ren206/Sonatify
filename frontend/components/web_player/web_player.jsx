import React from 'react';
import { connect } from 'react-redux';

import NavigationBar from './navigation/main_nav';
import NowPlaying from './now_playing/now_playing';

export default ({ children }) => {

  return (
    <section id="app-wrapper">
      <NavigationBar />

      <main className="main-view">
        { children }
      </main>

      <NowPlaying />

    </section>
  );
}
