import React from 'react';
import { Link } from 'react-router';
import AuthNav from '../session/auth_nav';
import LoginForm from '../session/login_form';
import SignupForm from '../session/signup_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

class Splash extends React.Component {
  constructor() {
    super();
    this.state = {
      formType: "authnav"
    }

    this.updateFormType = this.updateFormType.bind(this);
  }

  updateFormType(type) {
    return event => this.setState({
      formType: type
    })
  }

  renderAuth() {
    switch(this.state.formType) {
      case "login":
        return <LoginForm updateFormType={this.updateFormType} />
      case "signup":
        return <SignupForm updateFormType={this.updateFormType} />
      default:
        return <AuthNav updateFormType={this.updateFormType} />
    }
  }

  render() {
    return(
      <section className="splash">
        <div className="splash-wrapper">

          <div className="splash-left">
            {this.renderAuth()}
          </div>

          <div className="splash-divider" />

          <div className="splash-features">

            <h1>Get the right music, right now</h1>

            <br />

            <h2>Listen to millions of songs for free.</h2>

            <br />

            <ul>
              <li>Search &amp; discover music you'll love</li>
              <li>Create playlists of your favorite music</li>
              <li>Follow friends and their playlists</li>
            </ul>
          </div>
        </div>

      </section>
    )
  }
}

export default Splash;
