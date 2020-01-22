import { combineReducers } from 'redux';

const producer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_PRODUCER':
      return action.payload;
    case 'DESELECT_PRODUCER':
      return {};
    default:
      return state;
  }
};

const graphic = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_GRAPHIC':
      return action.payload;
    case 'DESELECT_GRAPHIC':
      return {};
    default:
      return state;
  }
};

const video = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_VIDEO':
      return action.payload;
    case 'DESELECT_VIDEO':
      return {};
    default:
      return state;
  }
};
export default combineReducers({
  producer,
  graphic,
  video,

});
  