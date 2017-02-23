import React from 'react';
import { connect } from 'react-redux';

import {
  playCurrentSong,
  pauseCurrentSong
} from '../../actions/queue_actions';

class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlayToggle = this.handlePlayToggle.bind(this);
  }

  componentDidUpdate () {
    if (this.props.playing && this.audioPlayer) {
      this.audioPlayer.play();
    } else if (this.audioPlayer) {
      this.audioPlayer.pause();
    }
  }

  handlePlayToggle(event) {
    event.preventDefault();
    this.props.playing ? this.props.pauseCurrentSong() : this.props.playCurrentSong();
  }

  render() {
    const currentSong = this.props.currentSong;
    if (!currentSong.title) {
      return (<div className="now-playing-wrapper inactive"></div>);
    }
    return(
      <div className="now-playing-wrapper active">
        <div id="now-playing">
          <h3
            className="now-playing-header">
            Now Playing
          </h3>

          <br />

          <div className="now-playing-info">
            
            <div className="now-playing-art">
              <img src={window.images.logo} />
              <h4>
                Sonatify
              </h4>
            </div>

          <br />

            <h5>
              {`${currentSong.title}`}
            </h5>

            <br/>

            <h6>
              {`${currentSong.artist.name}`}
            </h6>
          </div>

          <br />

          <div className="audio-controls">
            <button
              className="play-toggle"
              onClick={ this.handlePlayToggle }
              >
              <img
                src={
                  this.props.playing ?
                  window.images.pause :
                  window.images.play
                } />
            </button>


          </div>

          <br />

          <audio
            className="audio-player"
            ref={ ref => this.audioPlayer = ref }
            src={ `${currentSong.audio}` }
            controls={ true }
            />
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
    playCurrentSong: () => dispatch(playCurrentSong()),
    pauseCurrentSong: () => dispatch(pauseCurrentSong())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);
