import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function*  deletePicture(action) {
    const item = action.payload;
    console.log(action.payload, item);
    try{
        yield axios.delete(`/api/shelf/${action.payload.id}`, { data: { user_id: action.payload.user_id}});
        yield put({type:"FETCH_ITEMS"});
    } catch {
        console.log('error with post request in post saga');
    }
}


function*  deleteRoot() {
    yield takeLatest( 'DELETE_ITEM', deletePicture)
}


export default deleteRoot;