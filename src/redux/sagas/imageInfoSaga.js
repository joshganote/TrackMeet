import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postImageURL(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        console.log(action.payload);

        const data = {
            profile_img: action.payload
        }

        let response = yield axios.put('api/profiles/profile-pic', data, config);
        response = yield axios.get('api/user', config);
        yield put({ type: 'SET_USER', payload: response.data });
    } catch (error) {
        console.log('Image URL post failed', error);
    }
}

function* imageInfoSaga() {
    yield takeLatest('PUT_IMAGE_URL', postImageURL);
}

export default imageInfoSaga;