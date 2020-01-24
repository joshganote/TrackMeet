import { combineReducers } from 'redux';
import errors from './errors.reducer';
import loginMode from './loginMode.reducer';
import user from './user.reducer';
import profile from './profile.reducer';
import user_role from './user_role.reducer';
import selected_user from './selected_user.reducer';
import messages from './messages.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  profile, // expecting get back data from user, user_roles, profile, and project table from database
  user_role, // contains user table data from all users with a specific user role
  selected_user, // contains user table data for one specific user: id
  messages, // retrieve all data from communication table
});

export default rootReducer;
