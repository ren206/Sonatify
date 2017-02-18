import React from 'react';
import { connect } from 'react-redux';

class Browse extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="browse">
        <h1>Browse</h1>
      </section>
    )
  }
}
const mapStateToProps = ({ session }) => {
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
)(Browse);
