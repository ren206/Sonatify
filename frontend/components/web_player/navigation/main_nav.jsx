import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';

const MainNav = ({ session, logout, router }) => {

  const handleLogout = (event) => {
     event.preventDefault();
     logout().then( ()=> router.push('/'));
   }

  return (
    <div id="main-nav" className="main-menu">
      <div id="logo" className="logo" />

      <ul id="nav-items" className="main-menu-nav">

        <li className="browse-nav">

        </li>


        <li className="logout-nav">
          <button
            id="logout" className="logout"
            onClick={handleLogout}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = ({ session }) => {
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
