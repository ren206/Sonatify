import React from 'react';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { connect } from 'react-redux';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.routeParams.playlistId;
    this.props.fetchPlaylist(id);
  }

  render() {
    const list = this.props.playlist;
    const songsObj = this.props.playlist.songs;
    if (!this.props.playlist.songs) return null;
    const songKeys = Object.keys(songsObj);

    const songs = songKeys.map( key => {
      const song = songsObj[key];
      song.id = key;
      return song;
    });

    const songsAsArray = songs.map( (song, index) => {
      return (
        <tr
          className="song-list-items"
          key={index}>
            <td>{ song.title }</td>
            <td>Artist Name</td>
            <td>Album Name</td>
            <td>3:00</td>
        </tr>
      );
    });

    return(
      <section className="playlist-wrapper">
        <header className="main-title">
          <h1 className="main-title">
            { this.props.playlist.name }
          </h1>
        </header>

        <table className="song-list">
          <tbody>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Time</th>
            </tr>
            { songsAsArray }
          </tbody>
        </table>

      </section>
    )
  }
}

const mapStateToProps = (state, { location }) => {
  return {
    playlist: state.playlist,
    location
  }
}

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    location
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
