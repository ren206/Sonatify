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
    this.props.fetchPlaylists(`${this.props.session.currentUser.username}`);
  }

  render() {
    const currentUser = this.props.session.currentUser;
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

const mapStateToProps = ({ session }) => {
  return {
    session
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
