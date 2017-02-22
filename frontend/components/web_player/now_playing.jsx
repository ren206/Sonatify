import React from 'react';
import { connect } from 'react-redux';

class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // src = { song.audio }
    return(
      <div className="now-playing-wrapper">
        <div id="now-playing">
          <ul>
            <li className="now-playing-header">
              <h3>Now Playing</h3>
            </li>

            <li className="audio-player">
              <audio
                ref={ ref => this.audio = ref }
                />
            </li>

          </ul>
        </div>
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {

  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);
