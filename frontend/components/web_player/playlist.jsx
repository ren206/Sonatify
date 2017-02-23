import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  fetchPlaylist,
  deletePlaylist
} from '../../actions/playlist_actions';

import {
  setCurrentSong,
  playCurrentSong
} from '../../actions/queue_actions';

import PlaylistForm from './playlist_form';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
      // edit: 'inactive',
    // };
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePlay = this.handlePlay.bind(this);

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

  handlePlay(song) {
    return event => {
      event.preventDefault();
      this.props.setCurrentSong(song);
      this.props.playCurrentSong();
    }
  }

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
            <td
              onClick={ this.handlePlay(song) }
              className="play-button">
              <img src={window.images.play} />
            </td>
            <td>{ song.title }</td>
            <td>{ song.artist.name }</td>
            <td>{ song.album.name }</td>
            <td
              className="song-ellipsis">
              <img src={window.images.ellipsis} />
            </td>
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
          <div className="edit-delete-playlist">
            <PlaylistForm
              params={this.props.params} />
            &nbsp;&nbsp;
            <button
              className="delete-playlist"
              onClick={ this.handleDelete }>
              Delete
            </button>
          </div>
        </header>

        <table className="song-list">
          <tbody>
            <tr>
              <th></th>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              <th></th>
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
    setCurrentSong: song => dispatch(setCurrentSong(song)),
    playCurrentSong: () => dispatch(playCurrentSong()),
    location
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Playlist));
