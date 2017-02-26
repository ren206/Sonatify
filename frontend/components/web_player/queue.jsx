import React from 'react';
import { connect } from 'react-redux';

import {
  addSongToQueue,
  addPlaylistToQueue
} from '../../actions/queue_actions';

class Queue extends React.Component {
  constructor() {}

  render() {
    return()
  }
}

const mapStateToProps = (state, ownProps) {
  return({})
}

const mapDispatchToProps = (dispatch, ownProps) {
  return({})
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue);
