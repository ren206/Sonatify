import React from 'react';
import { connect } from 'react-redux';
import {
  createPlaylist,
  renamePlaylist,
  fetchPlaylist
} from '../../actions/playlist_actions';

class PlaylistEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playlist || { name: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //     this.props.fetchPlaylist(this.props.params.playlistId)
  //     .then(
  //       () => this.setState(this.props.playlist)
  //     );
  //   }

  componentWillReceiveProps(newProps) {
    if(!!newProps.playlist) this.setState(newProps.playlist);
  }

  handleSubmit(event) {
    event.preventDefault();
    const playlist = Object.assign({}, this.state);
    this.props.renamePlaylist(playlist.id, playlist.name).then(
      () => this.setState(this.props.playlist)
    );
  }

  updateInfo(field) {
    return event => this.setState({
      [field]: event.target.value
    });
  }

  render() {
    return(
      <div className="playlist-form">
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            value={ this.state.name }
            onChange={ this.updateInfo("name") }
            />
          &nbsp;
          <button className="main-green-button">
            Rename
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({playlist}, ownProps) => {
  return { playlist };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    renamePlaylist: (playlistId, newName) => dispatch(renamePlaylist(playlistId, newName)),
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistEditForm);
