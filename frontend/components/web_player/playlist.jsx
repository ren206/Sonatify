import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  fetchPlaylist,
  deletePlaylist
} from '../../actions/playlist_actions';

import PlaylistForm from './playlist_form';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
      // edit: 'inactive',
    // };
    this.handleDelete = this.handleDelete.bind(this);

  }

  componentDidMount() {
    // const playlistId = this.props.routeParams.playlistId;
    this.props.fetchPlaylist(this.props.routeParams.playlistId);
  }

  // handleClick(event) {
  //   event.preventDefault();
  //   this.setState({
  //     edit: 'active'
  //   });
  // }

  handleDelete(event) {
    const { routeParams, deletePlaylist, router } = this.props;
    event.preventDefault();
    deletePlaylist(routeParams.playlistId).then(
      () => router.push('/your-music')
    );

  }

  render() {
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

    // <button onClick={ this.handleClick }>
    //   Rename
    // </button>
    return(
      <section className="playlist-wrapper">
        <header className="main-title">
          <h1 className="main-title">
            { this.props.playlist.name }
          </h1>
          <PlaylistForm
            params={this.props.params} />
          <button
            className="delete-playlist"
            onClick={ this.handleDelete }>
            Delete
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
