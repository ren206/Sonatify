import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

import {
  createPlaylist,
  renamePlaylist,
  deletePlaylist
} from '../../actions/playlist_actions';

import NewPlaylistForm from './new_playlist_form';

class YourMusic extends React.Component {

  render() {
    const currentUser = this.props.session.currentUser
    const playlistsObj = currentUser ? currentUser.playlists : {};
    const playlistKeys = Object.keys(playlistsObj);

    const playlists = playlistKeys.map( key => {
      const playlist = playlistsObj[key];
      playlist.id = key;
      return playlist;
    });

    const playlistsAsArray = playlists.map( (playlist, index) => {
      return (
        <li key={index}>
          <Link to={ `playlists/${ playlist.id }` }>
              <h4>{ playlist.name }</h4>
          </Link>
        </li>
      );
    });

    return(
      <section className="your-music">
        <h1>{ this.props.session.currentUser.f_name }'s Music</h1>

        <ul className="your-playlists">
            <li>
              <NewPlaylistForm
              createPlaylist={ this.props.createPlaylist }/>
            </li>
          { playlistsAsArray }
        </ul>
      </section>
    )
  }
}

const mapStateToProps = ({ session }) => {
  return {
    session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    renamePlaylist: (playlistId, newName) => dispatch(renamePlaylist(playlistId, newName)),
    deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(YourMusic));
