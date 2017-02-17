import React from 'react';
import { login } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class AuthNav extends React.Component {
  constructor(props) {
    super(props);

    this.handleGuest = this.handleGuest.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this);
    this.redirectToSignup = this.redirectToSignup.bind(this);
  }

  handleGuest() {
    const guestUser = {
      username: 'guest',
      password: 'sonatify'
    }
    this.props.login(guestUser).then(() => this.props.router.push('/browse'));
  }

  redirectToLogin() {
    event.preventDefault();
    this.props.updateFormType("login");
  }

  redirectToSignup() {
    event.preventDefault();
    this.props.updateFormType("signup");
  }


  render() {
    return(
      <nav className="auth-nav">
        <div className="auth-nav-logo"/>
        <button className="clear-button" onClick={this.props.updateFormType('signup')}>
          Sign Up
        </button>

        <br/>

        <button className="green-button" onClick={this.handleGuest}>
          Login as Guest
        </button>

        <br/>

        <div className="small-text">
        <a href="#" onClick={this.props.updateFormType('login')}>
          Already have an account? Log in here.
        </a>
      </div>
      </nav>
    )
  }
}

export default withRouter(AuthNav);
