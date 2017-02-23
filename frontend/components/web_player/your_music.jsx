import React from 'react';
import { connect } from 'react-redux';
import MainList from './main_list';

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
  componentWillReceiveProps({playlists}) {
    if (Object.keys(this.props.playlists).length !== Object.keys(playlists).length) {
      this.props.fetchPlaylists(`${this.props.currentUser.username}`);
    }
  }

  render() {
    const playlistsObj = this.props.playlists || {};

    return(
      <section className="your-music">
        <h1>{ this.props.currentUser.f_name }'s Music</h1>

        <PlaylistForm
          formType="new"
          createPlaylist={ this.props.createPlaylist }/>

        <MainList
          itemsObj={playlistsObj}
          />
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
)(YourMusic);
