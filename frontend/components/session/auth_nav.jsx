import React from 'react';
import { login } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class AuthNav extends React.Component {
  constructor(props) {
    super(props);

    this.handleGuest = this.handleGuest.bind(this);
  }

  handleGuest() {
    const guestUser = {
      username: 'guest',
      password: 'sonatify'
    }

    this.props.login(guestUser).then(() => this.props.router.push('/browse'));
  }

  render() {
    return(
      <nav className="auth-nav">
        <h1>LOGO</h1>
        <button onClick={this.props.updateFormType("signup")}>Sign Up</button>

        <br/>

        <button onClick={this.handleGuest}>Login as Guest</button>

        <br/>

        <a href="#" onClick={this.props.updateFormType("login")}>
          Already have an account? Log in here.
        </a>
      </nav>
    )
  }
}

const mapStateToProps = ({ session }, { location }) => {
  return {
    currentUser: session.currentUser,
    errors: session.errors
  }
}

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    login: user => dispatch(login(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AuthNav));
