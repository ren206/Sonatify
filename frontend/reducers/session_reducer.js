import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const initialState = {
  currentUser: null,
  errors: []
};

export default (state = initialState, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, initialState, {
        currentUser
      });
    case LOGOUT:
      return merge({}, initialState);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, initialState, {
        errors
      });
    default:
      return state;
  }
};
