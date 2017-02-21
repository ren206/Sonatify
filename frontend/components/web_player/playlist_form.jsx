import React from 'react';

export default class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "New Playlist"
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const playlist = Object.assign({}, this.state)
    this.props.createPlaylist(playlist).then(
      () => this.setState({name: "New Playlist"})
    )
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
          <button className="main-green-button">
            Create
          </button>
        </form>
      </div>
    )
  }
}
