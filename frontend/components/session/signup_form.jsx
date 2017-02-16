import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupErrors from './signup_errors';

class Signup extends React.Component {
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

  redirect() {
    if (this.props.currentUser) {
			this.props.router.push("/");
		}
  }

  renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  updateInfo(field) {
		return event => this.setState({
			[field]: event.currentTarget.value
		});
	}

  render() {
		return (
			<section className="signup-form">
        <div className="small-signup-logo" />
        <h3>Create your free Sonatify account</h3>
        <br />
				<form onSubmit={this.handleSubmit}>
          <SignupErrors
            errors={ this.props.errors }
            />

						<label> Username
              <br/>
							<input type="text"
								value={this.state.username}
                placeholder="e.g. johndoe"
								onChange={this.updateInfo("username")} />
						</label>

						<br/>

						<label> Password
              <br/>
							<input type="password"
								value={this.state.password}
                placeholder="Choose a password"
								onChange={this.updateInfo("password")} />
						</label>

						<br/>

						<label> First Name
              <br/>
							<input type="text"
								value={this.state.f_name}
                placeholder="e.g. John"
								onChange={this.updateInfo("f_name")} />
						</label>
						<br/>

						<label> Last Name
              <br/>
							<input type="text"
								value={this.state.l_name}
                placeholder="e.g. Doe"
								onChange={this.updateInfo("l_name")} />
						</label>
						<br/>

						<button className="clear-button">
              Sign Up
            </button>
				</form>
        <div className="small-text">
          <a href="#" onClick={this.props.updateFormType("authnav")}>Go back</a>
        </div>
			</section>
		);
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
    signup: user => dispatch(signup(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Signup));
