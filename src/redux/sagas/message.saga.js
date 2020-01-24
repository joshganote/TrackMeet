import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getIncomingMessage(action) {
    try{
        const response = yield axios.get(`api/messages/sent-messages/${action.payload}`);
        console.log(response);
        yield put ({ 
            type: 'SELECT_SENT_MESSAGES',
            payload: response.data
        })
    } catch (err) { console.log(`couldn't get messages`, err)}
}

function* getSentMessages(action) {
    try{
        const response = yield axios.get(`api/messages/incoming-messages/${action.payload}`);
        console.log(response);
        yield put ({ 
            type: 'SELECT_INCOMING_MESSAGES',
            payload: response.data 
        })
    } catch (err) { console.log(`couldn't get sent messages`, err)}
}

function* postMessage(action) {
    const id = action.payload.id;
    try {
        const response = yield axios.post('api/messages/message/' + id, action.payload);
        console.log(response);
        yield put({ type: 'POST_MESSAGE', payload: id});
    } catch (err) {
        console.log('error profile POST', err);
    }
}

function* messageSaga() {
    yield takeLatest('GET_SENT_MESSAGES', getIncomingMessage);
    yield takeLatest('GET_INCOMING_MESSAGES', getSentMessages);
    yield takeLatest('POST_MESSAGE', postMessage);
  }
  export default messageSaga;