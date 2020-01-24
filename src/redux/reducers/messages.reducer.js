import { combineReducers } from 'redux';
const sentMessages = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_SENT_MESSAGES':
      return [...action.payload];
      return [];
    default:
      return state;
  }
};
const incomingMessages = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_INCOMING_MESSAGES':
      return [...action.payload];
      return [];
    default:
      return state;
  }
};
export default combineReducers({
  sentMessages,
  incomingMessages,

});