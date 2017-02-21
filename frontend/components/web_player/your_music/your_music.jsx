import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

class YourMusic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const playlistsObj = this.props.session.currentUser.playlists
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

    return(
      <section className="your-music">
        <h1>{ this.props.session.currentUser.f_name }'s Music</h1>
        <ul className="your-playlists">
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

// const mapDispatchToProps = dispatch => {
//   return {
//   }
// }

export default connect(
  mapStateToProps
)(withRouter(YourMusic));
