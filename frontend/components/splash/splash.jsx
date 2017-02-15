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
      <div>
        <div className="Splash">
          <h1>Get the right music, right now</h1>
          <h4>...on Sonatify, not Spotify</h4>
        </div>

        {this.renderAuth()}
      </div>
    )
  }
}

export default Splash;

// const mapDispatchToProps = dispatch => {
//   return {
//     login: user => dispatch(login(user))
//   }
// };
//
// export default connect(
//   null,
//   mapDispatchToProps
// )(Splash);


// authNav component
  // links to set formType
// signup component
// login component

// click handler in Splash for setting state.formType
// pass down click handler as props to children components
// so they can set state too
