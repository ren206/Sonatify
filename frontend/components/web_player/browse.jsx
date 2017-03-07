import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import MainList from './main_list';
import Spinner from '../loading/spinner';

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
      this.props.loading ?
      <Spinner /> :
      <section className="browse">
        <h1>Browse</h1>
        <MainList
          itemsObj={this.props.playlists}
          />
      </section>
    )
  }
}
const mapStateToProps = ({ session, playlists, loading }) => {
  return {
    session,
    playlists,
    loading: loading.playlistsLoading
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
