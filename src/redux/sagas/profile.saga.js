import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// This will GET all profile data for a specific user
function* profileUser(action) {
    const id = action.payload;
    try {
        const response = yield axios.get('/api/profiles/' + id);
        console.log(response);
        yield put({
            type: 'SET_PROFILE',
            
            payload: {
                ...response.data
            }
        });
    } catch (err) {
        console.log('couldnt get profile', err);
    }
}
// This will UPDATE data entry for specific user
function* updateUserBio(action) {    
    try {
//s3 call
        const response = yield axios.put('/api/profiles/bio/', action.payload);
        console.log(response);
        yield put({
            type: 'GET_PROFILE',
        });
    } catch (err) {
        console.log('error profile PUT', err);
    }
}
// This will send a POST to create a data entry for a specific user
// function* createProfileEntry(action) {
//     const id = action.payload.id;
//     try {
//         const response = yield axios.post('api/profiles/create-profile/' + id, action.payload);
//         console.log(response);
//         yield put({ type: 'POST_PROFILE', payload: id});
//     } catch (err) {
//         console.log('error profile POST', err);
//     }
// }
// This will UPDATE data entry for specific user
// function* editProfileTable(action) {
//     const id = action.payload.id;
//     console.log(action.payload);
//     try {
//         const response = yield axios.put('/api/profiles/profile/' + id, action.payload);
//         console.log(response);
//         yield put({
//             type: 'GET_PROFILE',
//             payload: id,
//         });
//     } catch (err) {
//         console.log('error profile PUT', err);
//     }
// }
function* profileSaga() {
    yield takeLatest('GET_PROFILE', profileUser);
    yield takeLatest('POST_PROFILE', updateUserBio);
    //yield takeLatest('PUT_PROFILE', editProfileTable);
}
export default profileSaga;