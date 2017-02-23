import React from 'react';
import { connect } from 'react-redux';

class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate () {
    if (this.props.currentSong.playing && this.audioPlayer) {
      this.audioPlayer.play();
    } else if (this.audioPlayer) {
      this.audioPlayer.pause();
    }
  }

  render() {
    const currentSong = this.props.currentSong;
    if (!currentSong.song.id) {
      return (<div className="now-playing-wrapper inactive"></div>);
    }
    return(
      <div className="now-playing-wrapper">
        <div id="now-playing">
          <ul>
            <li className="now-playing-header">
              <h3>Now Playing</h3>
            </li>

            <li className="audio-player">
              <audio
                ref={ ref => this.audioPlayer = ref }
                src={ `${currentSong.song.audio}` }
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
    currentSong: state.queue.currentSong
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
