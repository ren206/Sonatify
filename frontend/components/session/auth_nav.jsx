import React from 'react';

class AuthNav extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return(
      <nav className="auth-nav">
        <h1>LOGO</h1>
        <button onClick={this.props.updateFormType("signup")}>Sign Up</button>

        <br/>
        
        <a href="#" onClick={this.props.updateFormType("login")}>
          Already have an account? Log in here.
        </a>
      </nav>
    )
  }
}

export default AuthNav;
