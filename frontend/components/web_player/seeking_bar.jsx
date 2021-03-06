import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0
    }
    this.updateTime = this.updateTime.bind(this);
  }

  componentDidMount() {
    this.audioElement = document.getElementById('audio-player')
    this.audioElement.addEventListener('timeupdate', this.updateTime);
  }

  updateTime (event) {
    const currentTime = Math.floor(event.currentTarget.currentTime);
    const duration = Math.floor(event.currentTarget.duration);
    this.setState({ currentTime, duration });
  }

  render () {
    const padTime = seconds => {
      if (seconds) {
        const min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        if (sec < 10) {
          sec = `0${sec}`;
        }
        return `${min}:${sec}`;
      } else {
      return "0:00";
    }
    };

    const currentTime = this.state.currentTime;
    const currentSong = this.props.currentSong;
    return (
      <div className="song-progress">
        <progress
          id="song-progress-bar"
          value={ currentTime / currentSong.duration }
          max="1">
        </progress>
        <ul className="song-progress-info">
          <li>
            { padTime(this.state.currentTime) }
          </li>
          <li>
            { padTime(this.state.duration) }
          </li>
        </ul>
      </div>
    );
  }
}

export default ProgressBar;
