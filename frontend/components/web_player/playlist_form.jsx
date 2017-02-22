import React from 'react';
import { connect } from 'react-redux';
import {
  createPlaylist,
  renamePlaylist,
  fetchPlaylist
} from '../../actions/playlist_actions';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playlist;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchPlaylist(this.props.params.playlistId);
    }
  }

  componentWillReceiveProps(newProps) {
    if(!!newProps.playlist) this.setState(newProps.playlist);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.formType === 'new') {
      const playlist = Object.assign({}, this.state);
      this.props.createPlaylist(playlist).then(
        () => this.setState(this.props.playlist)
      );

    } else {
      const playlist = Object.assign({}, this.state);
      this.props.renamePlaylist(playlist.id, playlist.name).then(
        () => this.setState(this.props.playlist)
      );
    }
  }

  updateInfo(field) {
    return event => this.setState({
      [field]: event.target.value
    });
  }

  render() {
    const text = this.props.formType === 'new' ? "Create" : "Rename";
    return(
      <div className="new-playlist-form">
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            value={ this.state.name }
            onChange={ this.updateInfo("name") }
            />
          &nbsp;
          <button className="main-green-button">
            { text }
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let playlist = { name: "New Playlist" };
  if (ownProps.params) {
    playlist = state.playlists[ownProps.params.playlistId];
  }
  let formType = ownProps.formType || "edit";
  return { playlist, formType };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPlaylist: playlist => dispatch(createPlaylist(playlist)),
    renamePlaylist: (playlistId, newName) => dispatch(renamePlaylist(playlistId, newName)),
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm);
