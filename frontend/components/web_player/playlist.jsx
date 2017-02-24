import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  ContextMenu,
  MenuItem,
  ContextMenuTrigger,
  SubMenu
} from "react-contextmenu";

import {
  fetchPlaylist,
  fetchPlaylists,
  deletePlaylist,
  createListing,
  removeListing
} from '../../actions/playlist_actions';

import {
  setCurrentSong,
  playCurrentSong
} from '../../actions/queue_actions';

import PlaylistForm from './playlist_form';

const SONG_CONTEXT_MENU = "SONG_CONTEXT_MENU";

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
    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.handleAddToPlaylist = this.handleAddToPlaylist.bind(this);

  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.routeParams.playlistId);

    this.props.fetchPlaylists(this.props.currentUser.username);
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

  handleClickPlay(event, data, target) {
    event.preventDefault();
    this.props.setCurrentSong(data.song);
    this.props.playCurrentSong();
  }

  handleAddToPlaylist(event, data, target) {
    event.preventDefault();
    this.props.createListing(data.myPlaylist.id, data.song.id)
  }

  render() {
    const myPlaylistsObj = this.props.playlists || {};
    const myPlaylistKeys = Object.keys(myPlaylistsObj);

    const myPlaylists = myPlaylistKeys.map( key => {
      const myPlaylist = myPlaylistsObj[key];
      myPlaylist.id = key;
      return myPlaylist;
    });

    const myPlaylistsAsArray = myPlaylists.map( (myPlaylist, index) => {
      return (
        <MenuItem
          key={index}
          onClick={this.handleAddToPlaylist}
          data={{myPlaylist: myPlaylist}} >
          {myPlaylist.name}
        </MenuItem>
      )
    });

    if (!this.props.playlist.songs) return null;
    const songsObj = this.props.playlist.songs;
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
            id={SONG_CONTEXT_MENU}
            song={song}
            collect={collect}
            holdToDisplay={1000}
            key={index}>
              <td
                className="play-button"
                onClick={ this.handlePlay(song) }>
                <img src={window.images.play} />
              </td>
              <td>{ song.title }</td>
              <td>{ song.artist.name }</td>
              <td>{ song.album.name }</td>
              <ContextMenuTrigger renderTag='td'
                id={SONG_CONTEXT_MENU}
                song={song}
                collect={collect}
                holdToDisplay={0}
                className="song-ellipsis">
                <img src={window.images.ellipsis} />
              </ContextMenuTrigger>
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

        <ContextMenu id={SONG_CONTEXT_MENU}>
          <MenuItem onClick={this.handleClickPlay}>Play Song</MenuItem>
            <SubMenu title='Add Song To...'>
                {myPlaylistsAsArray}
            </SubMenu>
        </ContextMenu>

      </section>
    )
  }
}

const mapStateToProps = (state, { location }) => {
  return {
    currentUser: state.session.currentUser,
    playlist: state.playlist,
    playlists: state.playlists,
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
    createListing: (playlistId, songId) => dispatch(createListing(playlistId, songId)),
    removeListing: listingId => dispatch(removeListing(listingId)),
    location
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Playlist));
