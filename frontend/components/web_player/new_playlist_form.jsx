import React from 'react';

export default class NewPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "New Playlist",
      username: `${this.props.currentUser.username}`
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const playlist = Object.assign({}, this.state)
    this.props.createPlaylist(playlist);
  }

  updateInfo(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  render() {
    return(
      <div className="new-playlist-form">
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            value={ this.state.name }
            onChange={ this.updateInfo("name") }
            />
          &nbsp;
          <button className="green-button">
            Create
          </button>
        </form>
      </div>
    )
  }
}
