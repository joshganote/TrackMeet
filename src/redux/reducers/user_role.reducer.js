import { combineReducers } from 'redux';

const producer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCER':
      return action.payload;
    case 'UNSET_PRODUCER':
      return [];
    default:
      return state;
  }
};

const graphic = (state = [], action) => {
  switch (action.type) {
    case 'SET_GRAPHIC':
      return action.payload;
    case 'UNSET_GRAPHIC':
      return [];
    default:
      return state;
  }
};

const video = (state = [], action) => {
  switch (action.type) {
    case 'SET_VIDEO':
      return action.payload;
    case 'UNSET_VIDEO':
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  producer,
  graphic,
  video,
});
  