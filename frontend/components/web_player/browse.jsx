import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { fetchPlaylists } from '../../actions/playlist_actions';

class Browse extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists('michael');
  }

  render() {
    const playlistsObj = this.props.playlists;
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
              <h3>{ playlist.name }</h3>
          </Link>
        </li>
      );
    });

    return (
      <section className="browse">
        <h1>Browse</h1>
        <ul>
          { playlistsAsArray }
        </ul>
      </section>
    )
  }
}
const mapStateToProps = ({ session, playlists }) => {
  return {
    session,
    playlists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: username => dispatch(fetchPlaylists(username))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Browse));
