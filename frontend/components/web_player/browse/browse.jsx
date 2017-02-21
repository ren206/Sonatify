import React from 'react';
import { connect } from 'react-redux';

class Browse extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const playlists =
    return (
      <section className="browse">
        <h1>Browse</h1>
        <ul>

        </ul>
      </section>
    )
  }
}
const mapStateToProps = ({ session }) => {
  return {
    session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receivePlaylists: userId => dispatch(receivePlaylists(userId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Browse));
