import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""

    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() => this.props.router.push('/browse'));
  }

  redirect() {
    if (this.props.currentUser) {
			this.props.router.push("/");
		}
  }

  updateInfo(field) {
		return event => this.setState({
			[field]: event.currentTarget.value
		});
	}

  render() {
		return (
			<section>
        <div className="small-login-logo" />

        <br/>

        <h3>Log in</h3>

        <br/>
        <div className="login-errors">
          {Boolean(this.props.errors.length) ? "Incorrect username and password" : ""}
        </div>
				<form onSubmit={this.handleSubmit}>
					<br/>

					<label htmlFor="username">Username</label>
            <br/>
						<input type="text"
              id="username"
							value={this.state.username}
              placeholder="Sonatify username"
							onChange={this.updateInfo("username")} />

					<br/>

					<label htmlFor="password">Password</label>
            <br/>
						<input type="password"
              id="password"
							value={this.state.password}
              placeholder="Password"
							onChange={this.updateInfo("password")} />

					<br/>

					<button className="clear-button">
            Login
          </button>
				</form>

        <div className="small-text">
          Don't have an account? &nbsp;
          <a href="#"
            className="auth-link"
            onClick={this.props.updateFormType("authnav")}>
            Sign up here!
          </a>
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
    login: user => dispatch(login(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));
