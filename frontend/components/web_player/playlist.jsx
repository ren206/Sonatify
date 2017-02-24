import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  ContextMenu,
  MenuItem,
  ContextMenuTrigger
} from "react-contextmenu";

import {
  fetchPlaylist,
  deletePlaylist,
  createListing,
  removeListing
} from '../../actions/playlist_actions';

import {
  setCurrentSong,
  playCurrentSong
} from '../../actions/queue_actions';

import PlaylistForm from './playlist_form';

const MENU_TYPE = "SONG_CONTEXT_MENU";

const collect = props => {
  return { song: props.song };
}

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
      // edit: 'inactive',
    // };
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
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

  handleClick(event, data, target) {
    event.preventDefault();
    this.props.setCurrentSong(data.song);
    this.props.playCurrentSong();
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
        <ContextMenuTrigger renderTag='tr'
            className="song-list-items"
            id={MENU_TYPE}
            song={song}
            collect={collect}
            holdToDisplay={1000}
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
          </ContextMenuTrigger>
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

        <ContextMenu id={MENU_TYPE}>
          <MenuItem onClick={this.handleClick} data={{item: 'item 1'}}>Play Song</MenuItem>
          <MenuItem onClick={this.handleClick} data={{item: 'item 2'}}>Menu Item 2</MenuItem>
        </ContextMenu>

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
    fetchPlaylists: username => dispatch(fetchPlaylists(username)),
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
