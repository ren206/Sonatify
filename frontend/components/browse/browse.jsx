import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const Browse = ({currentUser, logout, router}) => {

  const handleLogout = (event) => {
    event.preventDefault();
    logout().then( ()=> router.push('/'));
  }

  if (!currentUser) return null;

  return (
    <section className="app">
      <h1>Welcome, {currentUser.username}</h1>
      <h3>Most of Sonatify will live here</h3>

      <button onClick={handleLogout}>Log Out</button>
    </section>
  )
}

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
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
)(Browse);
