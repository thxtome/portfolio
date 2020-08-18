import { call, put, takeEvery } from "redux-saga/effects";
import * as api from "./api";
import { messageActions } from "../store/module/message";

function* sendContactSaga(action) {
  try {
    const message = action.payload;
    const response = yield call(api.sendContactMessage, message);
    yield put(messageActions.SEND_CONTACT_MESSAGE_SUCCEED({ response }));
  } catch (e) {
    yield put(messageActions.SEND_CONTACT_MESSAGE_FAILED());
  }
}

function* baseSaga() {
  yield takeEvery(messageActions.SEND_CONTACT_MESSAGE, sendContactSaga);
}

export default baseSaga;
