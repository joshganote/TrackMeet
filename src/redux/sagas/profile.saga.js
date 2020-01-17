import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* profileUser(action) {
    try{
        const response = yield axios.get(`/api/user/profile/${action.payload}`);
        yield put({
            type: 'SET_PROFILE',
            payload: response.data
        });
    } catch (err) {
        console.log(err);
    }
}
function* profileSaga() {
    yield takeLatest('GET_PROFILE', profileUser);
  }
  
  export default profileSaga;