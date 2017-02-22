import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import MainList from './main_list';

class Browse extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists('michael');
  }
  componentWillReceiveProps({playlists}) {
    if (Object.keys(this.props.playlists).length !== Object.keys(playlists).length) {
      this.props.fetchPlaylists('michael');
    }
  }

  render() {
    return (
      <section className="browse">
        <h1>Browse</h1>
        <MainList
          itemsObj={this.props.playlists}
          />
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
)(Browse);
