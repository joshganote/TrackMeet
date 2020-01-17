import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* profileUser() {
    try{
        const response = yield axios.get(`/api/user/profile`);
        yield put({
            type: 'SET_PROFILE',
            payload: response.data
        });
    } catch (err) {
        console.log(err);
    }
}
function* profileSaga() {
    yield takeLatest('PROFILE', profileUser);
  }
  
  export default profileSaga;