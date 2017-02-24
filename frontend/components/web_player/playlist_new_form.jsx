import React from 'react';
import { connect } from 'react-redux';
import {
  createPlaylist,
} from '../../actions/playlist_actions';

class PlaylistNewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "New Playlist" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const playlist = Object.assign({}, this.state);
    this.props.createPlaylist(playlist)
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
            value= { this.state.name }
            onChange={ this.updateInfo("name") }
            />
          &nbsp;
          <button className="main-green-button">
            Create
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(PlaylistNewForm);
