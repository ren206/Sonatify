import React from 'react';
import { connect } from 'react-redux';

class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate () {
    if (this.props.playing && this.audioPlayer) {
      this.audioPlayer.play();
    } else if (this.audioPlayer) {
      this.audioPlayer.pause();
    }
  }

  render() {
    const currentSong = this.props.currentSong;
    if (!currentSong.title) {
      return (<div className="now-playing-wrapper inactive"></div>);
    }
    return(
      <div className="now-playing-wrapper active">
        <div id="now-playing">
          <ul>
            <li className="now-playing-header">
              <h3>Now Playing</h3>
            </li>

            <li className="audio-player">
              <audio
                ref={ ref => this.audioPlayer = ref }
                src={ `${currentSong.audio}` }
                controls={ true }
                />
            </li>

          </ul>
        </div>
      </div>
    )
  }
}



const mapStateToProps = ({ queue }) => {
  return {
    currentSong: queue.currentSong,
    playing: queue.playing
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
