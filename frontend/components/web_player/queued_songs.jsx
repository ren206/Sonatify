import React from 'react';
import { connect } from 'react-redux';

import {
  clearQueue
} from '../../actions/queue_actions';

class QueuedSongs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let queueList = this.props.queue.order.map((songIdx, idx) => {
      return (
        <li
          key={idx}
          className="queued-song-item">
          {this.props.queue.songs[songIdx].title}
        </li>
      );
    });

    if (queueList.length > 0 ) {
      return (
        <div
          id="queued-songs"
          >
          <p>Queued Songs</p>
          <ul>
            {queueList}
          </ul>
        </div>
      );
    } else {
      return (
        <div id="queued-songs">

        </div>
      );
    }
  }

}

const mapStateToProps = ({queue}, ownProps) => {
  return({
    queue
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    clearQueue: () => dispatch(clearQueue())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueuedSongs);
