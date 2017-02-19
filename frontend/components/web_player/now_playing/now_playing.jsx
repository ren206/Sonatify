import React from 'react';
import { connect } from 'react-redux';

class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="now-playing-wrapper">
        <div id="now-playing">
          <ul>
            <h3>Now Playing</h3>
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
