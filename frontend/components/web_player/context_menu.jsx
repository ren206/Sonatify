import React from 'react';
import { connect } from 'react-redux';
import { addSongToPlaylist,

 } from '../../util/playlist_api_util';

class ContextMenu extends React.Component {
  constructor(props) {
    super(props);
  }
}

const mapStateToProps = state => {
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContextMenu);
