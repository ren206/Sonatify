import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

import {
  fetchPlaylists,
  createPlaylist,
  renamePlaylist,
  deletePlaylist
} from '../../actions/playlist_actions';

import PlaylistForm from './playlist_form';

class YourMusic extends React.Component {

  componentDidMount() {
    this.props.fetchPlaylists(`${this.props.currentUser.username}`);
  }

  render() {
    const currentUser = this.props.currentUser;
    const playlistsObj = currentUser ? this.props.playlists : {};
    const playlistKeys = Object.keys(playlistsObj);

    const playlists = playlistKeys.map( key => {
      const playlist = playlistsObj[key];
      playlist.id = key;
      return playlist;
    });

    const playlistsAsArray = playlists.map( (playlist, index) => {
      return (
        <li key={index}>
          <img className="artwork"
            src={playlist.image_url}/>
          <Link to={ `playlists/${ playlist.id }` }>
              <h4>{ playlist.name }</h4>
          </Link>
        </li>
      );
    });

    return(
      <section className="your-music">
        <h1>{ this.props.currentUser.f_name }'s Music</h1>

        <ul className="your-playlists">
            <li>
              <PlaylistForm
                formType="new"
              createPlaylist={ this.props.createPlaylist }/>
            </li>
          { playlistsAsArray }
        </ul>
      </section>
    )
  }
}

const mapStateToProps = ({ session, playlists }) => {
  return {
    currentUser: session.currentUser,
    playlists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: username => dispatch(fetchPlaylists(username)),
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    renamePlaylist: (playlistId, newName) => dispatch(renamePlaylist(playlistId, newName)),
    deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(YourMusic));
