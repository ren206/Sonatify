import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

class Login extends React.Component {
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
			<div>
        <h3>LOGO</h3>

        <br/>

        <h3>Log in</h3>

        <br/>
        {this.renderErrors()}
				<form onSubmit={this.handleSubmit}>
						<br/>

						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.updateInfo("username")} />
						</label>

						<br/>

						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.updateInfo("password")} />
						</label>

						<br/>

						<input type="submit" value="Login" />
				</form>

        Don't have an account?
        <a href="#" onClick={this.props.updateFormType("authnav")}>
          Sign up here!
        </a>
			</div>
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
)(withRouter(Login));
