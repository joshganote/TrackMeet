import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* profileUser(action) {
    const id = action.payload.id
    try{
        const response = yield axios.get('/api/profile' + id);
        yield put({
            type: 'SET_PROFILE',
            payload: response.data[0]
        });
    } catch (err) {
        console.log('couldnt get profile', err);
    }
}
function* profileSaga() {
    yield takeLatest('GET_PROFILE', profileUser);
  }
  
  export default profileSaga;