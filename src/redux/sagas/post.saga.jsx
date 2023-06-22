import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function*  postPicture(action) {
    console.log(action.payload);
    try{
        yield axios.post('/api/shelf', action.payload);
        put({type:"FETCH_ITEMS"});
    } catch {
        console.log('error with post request in post saga');
    }
}


function*  postRoot() {
    yield takeLatest( 'POST_IMAGE', postPicture)
}


export default postRoot;