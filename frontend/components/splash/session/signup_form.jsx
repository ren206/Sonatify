import React from 'react';
import { Link, withRouter } from 'react-router';
import { signup } from '../../../actions/session_actions';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      f_name: "",
      l_name: "",
      password: ""

    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user).then( ()=> this.props.router.push('/browse'));
  }

  updateInfo(field) {
		return event => {
      event.preventDefault();
      this.setState({ [field]: event.currentTarget.value})
    }
	}

  // toggleError(field) {
  //   return event => {
  //     event.preventDefault();
  //     this.setState({ [field]: false })
  //   }
  // }

  render() {
    const {session} = this.props;
    const findError = field => {
      let someError = session.errors.find( error => (error.toLowerCase().includes(field)) );
      return Boolean(someError) ? someError : "";
    }
    const usernameError = findError("username") || "";
    const passwordError = findError("password") || "";
    const fnameError = findError("f name");
    const firstNameError = Boolean(fnameError) ? "First" + fnameError.slice(1) : "";
    const lnameError = findError("l name");
    const lastNameError = Boolean(lnameError) ? "Last" + lnameError.slice(1) : "";
    const usernameClass = findError("username") ? "has-error" : "";
    const passwordClass = findError("password") ? "has-error" : "";
    const fnameClass = findError("f name") ? "has-error" : "";
    const lnameClass = findError("l name") ? "has-error" : "";
		return (
			<section className="signup-form">
        <div className="small-signup-logo" />
        <h3>Create your free Sonatify account</h3>
        <br />
				<form onSubmit={this.handleSubmit}>

          <p id="wrap-username" className={ usernameClass }>
            <label htmlFor="username">Username</label>
              <br/>
  						<input type="text"
                id="username"
  							value={this.state.username}
                placeholder="e.g. johndoe"
  							onChange={this.updateInfo("username")} />
              <div className={ usernameClass }>{usernameError}</div>
          </p>

					<br/>

          <p id="wrap-password" className={ passwordClass }>
  					<label htmlFor="password">Password</label>
              <br/>
  						<input type="password"
                id="password"
  							value={this.state.password}
                placeholder="Choose a password"
  							onChange={this.updateInfo("password")} />
              <div className={ passwordClass }>{passwordError}</div>
          </p>

					<br/>

          <p id="wrap-fname" className={ fnameClass }>
  					<label htmlFor="fname">First Name</label>
              <br/>
							<input type="text"
                id="fname"
								value={this.state.f_name}
                placeholder="e.g. John"
								onChange={this.updateInfo("f_name")} />
              <div className={ fnameClass }>{firstNameError}</div>
          </p>

					<br/>

          <p id="wrap-lname" className={ lnameClass }>
  					<label htmlFor="lname">Last Name</label>
              <br/>
  						<input type="text"
                id="lname"
  							value={this.state.l_name}
                placeholder="e.g. Doe"
  							onChange={this.updateInfo("l_name")} />
              <div className={ lnameClass }>{lastNameError}</div>
          </p>

					<br/>

						<button className="clear-button">
              Sign Up
            </button>
				</form>
        <div className="small-text">
          <a href="#" onClick={this.props.updateFormType('authnav')}>Go back</a>
        </div>
			</section>
		);
	}
}

export default withRouter(SignupForm);
