import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getShelfItems() {
    try {
      const items = yield axios.get("/api/shelf");
      console.log("Get all items", items.data);
      yield put({ type: "SET_ITEMS", payload: items.data });
    } catch {
      console.log("Error in getShelfItems", error);
    }
  }

  function* displaySaga() {
    yield takeLatest('FETCH_ITEMS', getShelfItems);
  }
  
  export default displaySaga;