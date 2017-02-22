import React from 'react';
import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import AuthNav from './session/auth_nav';
import LoginForm from './session/login_form';
import SignupForm from './session/signup_form';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "authnav"
    }

    this.updateFormType = this.updateFormType.bind(this);
  }

  updateFormType(formType) {
      return event => {
        event.preventDefault();
        this.props.clearErrors();
        this.setState({ formType });
    }
  };

  renderAuth() {
    const { session, login, signup } = this.props;
    switch(this.state.formType) {
      case "login":
        return <LoginForm
          updateFormType={this.updateFormType}
          session={session}
          login={login} />

      case "signup":
        return <SignupForm
          updateFormType={this.updateFormType}
          session={session}
          signup={signup} />

      default:
        return <AuthNav
          updateFormType={this.updateFormType}
          session={session}
          login={login} />
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

            <h2>Listen to hundreds of songs for free.</h2>

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
const mapStateToProps = ({ session }, { location }) => {
  return {
    session
  }
}

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
