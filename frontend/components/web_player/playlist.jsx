import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  fetchPlaylist,
  deletePlaylist
} from '../../actions/playlist_actions';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: 'inactive'
    };
  }

  componentDidMount() {
    const playlistId = this.props.routeParams.playlistId;
    this.props.fetchPlaylist(playlistId);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      edit: 'active'
    });
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
          <button onClick={ this.handleClick }>
            Rename Playlist
          </button>
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
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
    deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
    location
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Playlist));
