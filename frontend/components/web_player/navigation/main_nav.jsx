import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }


  handleLogout(event) {
    const { logout, router } = this.props;
     event.preventDefault();
     logout().then( ()=> router.push('/'));
  }

  render() {

    return (
      <div id="main-nav" className="main-menu">
        <div id="logo" className="logo" />

        <ul id="nav-items" className="main-menu-nav">

          <li className="browse-nav">
            <Link to={ "/browse" }>
              <div id="browse-icon">
                Browse
              </div>
            </Link>
          </li>

          <li className="your-music-nav">
            <Link to={ "/your-music" }>
              <div id="your-music-icon">
                Your Music
              </div>
            </Link>
          </li>


          <li className="logout-nav">
            <button
              id="logout" className="logout"
              onClick={this.handleLogout}>
              Log Out
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ session }, { location }) => {
  return {
    session
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MainNav));
