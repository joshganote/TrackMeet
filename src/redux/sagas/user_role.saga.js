import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//----- Artist Role SAGA -------//
function* producerRole() {
    try{
        const response = yield axios.get('api/user/producer');
        console.log(response);
        yield put ({ 
            type: 'SET_PRODUCER',
            payload: response.data 
        })
    } catch (err) { console.log(`couldn't get producers`, err)}
}

function* getProducerId(action) {
    try{
        const response = yield axios.get(`api/user/single/${action.payload}`);
        console.log(response);
        yield put({
            type: 'SELECT_PRODUCER',
            payload: response.data[0]
        })
    } catch(err) {
        console.log('GET userId error', err)
    }
}
//-----End Artist Role SAGA -------//
//-----Start Graphic Role SAGA -------//
function* graphicRole() {
    try{
        const response = yield axios.get('api/user/graphic');
        console.log(response);
        yield put ({ 
            type: 'SET_GRAPHIC',
            payload: response.data 
        })
    } catch (err) { console.log(`couldn't get producers`, err)}
}

function* getGraphicId(action) {
    try{
        const response = yield axios.get(`api/user/single/${action.payload}`);
        console.log(response);
        yield put({
            type: 'SELECT_GRAPHIC',
            payload: response.data[0]
        })
    } catch(err) {
        console.log('GET userId error', err)
    }
}
//-----End Graphic Role SAGA -------//
//-----Start Video Role SAGA -------//
function* videoRole() {
    try{
        const response = yield axios.get('api/user/video');
        console.log(response);
        yield put ({ 
            type: 'SET_VIDEO',
            payload: response.data 
        })
    } catch (err) { console.log(`couldn't get producers`, err)}
}

function* getVideoId(action) {
    try{
        const response = yield axios.get(`api/user/single/${action.payload}`);
        console.log(response);
        yield put({
            type: 'SELECT_VIDEO',
            payload: response.data[0]
        })
    } catch(err) {
        console.log('GET userId error', err)
    }
}
//-----End Video Role SAGA -------//
function* userRoleSaga() {
  yield takeLatest('GET_PRODUCER', producerRole);
  yield takeLatest('GET_PRODUCER_BY_ID', getProducerId);
  yield takeLatest('GET_GRAPHIC', graphicRole);
  yield takeLatest('GET_GRAPHIC_BY_ID', getGraphicId);
  yield takeLatest('GET_VIDEO', videoRole);
  yield takeLatest('GET_VIDEO_BY_ID', getVideoId);
}
export default userRoleSaga;