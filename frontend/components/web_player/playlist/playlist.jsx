import React from 'react';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="playlists-wrapper">
        <h1>Playlist</h1>
        <ul>

        </ul>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    playlist: state.playlist
  }
}

export default Playlist;
