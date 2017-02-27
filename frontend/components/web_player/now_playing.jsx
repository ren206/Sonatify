import React from 'react';
import { connect } from 'react-redux';

import {
  playCurrentSong,
  pauseCurrentSong,
  nextSong
} from '../../actions/queue_actions';

import SeekingBar from './seeking_bar';

import QueuedSongs from './queued_songs';

class NowPlaying extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: 0
    }

    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
  }

  componentDidUpdate () {
    if (this.props.playing && this.audioPlayer) {
      this.audioPlayer.play();
    } else if (this.audioPlayer) {
      this.audioPlayer.pause();
    }
  }

  handleTogglePlay(event) {
    event.preventDefault();
    this.props.playing ? this.props.pauseCurrentSong() : this.props.playCurrentSong();
  }

  handleClickNext(event) {
    event.preventDefault();
    this.props.nextSong();
  }
  handleClickPrev(event) {
    event.preventDefault();
    this.audioPlayer = document.getElementById('audio-player');
    this.audioPlayer.currentTime = 0;
  }

  render() {
    const currentSong = this.props.currentSong;
    if (!currentSong.title) {
      return (<div className="now-playing-wrapper-inactive" />);
    }
    return(
      <div className="now-playing-wrapper-active">
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
              {`${currentSong.title}` || ""}
            </h5>

            <br/>

            <h6>
              {`${currentSong.artist.name}` || ""}
            </h6>
          </div>

          <br />
          <audio
            id="audio-player"
            ref={ ref => this.audioPlayer = ref }
            src={ `${currentSong.audio}` }
            />
          <br />
          <div className="audio-controls">

            <SeekingBar className="seeking-bar"
              currentSong={currentSong} />

            <div className="audio-control-buttons">
              <button
                className="prev-button"
                onClick={ this.handleClickPrev }>
                <img
                  src={ window.images.prev }/>
              </button>

              <button
                className="play-toggle"
                onClick={ this.handleTogglePlay }
                >
                <img
                  src={
                    this.props.playing ?
                    window.images.pause :
                    window.images.play
                  } />
              </button>

              <button
                className="next-button"
                onClick={ this.handleClickNext }>
                <img
                  src={ window.images.next }/>
              </button>
            </div>
          </div>
        </div>

        <QueuedSongs />
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
    pauseCurrentSong: () => dispatch(pauseCurrentSong()),
    nextSong: () => dispatch(nextSong())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);
