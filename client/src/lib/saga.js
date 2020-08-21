import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from './api';
import { messageActions } from '../store/module/message';
import { postActions } from '../store/module/post';

function* sendContactSaga(action) {
  try {
    const message = action.payload;
    const response = yield call(api.sendContactMessage, message);
    yield put(messageActions.SEND_CONTACT_MESSAGE_SUCCEED({ response }));
  } catch (e) {
    yield put(messageActions.SEND_CONTACT_MESSAGE_FAILED());
  }
}

function* addPostRequestSaga(action) {
  try {
    const post = action.payload;
    const response = yield call(api.addPostRequest, post);
    const responsePost = response.data.data.post;

    yield put(postActions.ADD_POST_SUCCEED(responsePost));
  } catch (e) {
    console.log(e);
    yield put(postActions.ADD_POST_FAILED());
  }
}

function* getPostRequestSaga(action) {
  try {
    const page = action.payload;
    const response = yield call(api.getPostRequest, page);
    const posts = response.data.data.posts;
    yield put(postActions.GET_POSTS_SUCCEED(posts));
  } catch (e) {
    console.log(e);
    yield put(postActions.GET_POSTS_FAILED());
  }
}

function* updatePostRequestSaga(action) {
  try {
    const post = action.payload;
    const response = yield call(api.updatePostRequest, post);
    const updatedPost = response.data.data.post;
    console.log(updatedPost);
    yield put(postActions.MODIFY_POST_SUCCEED(updatedPost));
  } catch (e) {
    console.log(e);
    yield put(postActions.MODIFY_POST_FAILED());
  }
}

function* deletePostRequestSaga(action) {
  try {
    const postId = action.payload;
    const response = yield call(api.deletePostRequest, postId);
    const deletedPost = response.data.data.post;
    console.log(response.data.data.post);
    yield put(postActions.DELETE_POST_SUCCEED(deletedPost));
  } catch (e) {
    console.log(e);
    yield put(postActions.DELETE_POST_FAILED());
  }
}

function* confirmPasswordRequestSaga(action) {
  try {
    const { id, password } = action.payload;
    const response = yield call(api.confirmPasswordRequest, { id, password });
    const result = response.data.data;
    yield put(postActions.CONFIRM_PASSWORD_SUCCEED(result));
  } catch (e) {
    yield put(postActions.CONFIRM_PASSWORD_FAILED());
  }
}

function* baseSaga() {
  yield takeEvery(messageActions.SEND_CONTACT_MESSAGE, sendContactSaga);
  yield takeEvery(postActions.ADD_POST, addPostRequestSaga);
  yield takeEvery(postActions.GET_POSTS, getPostRequestSaga);
  yield takeEvery(postActions.CONFIRM_PASSWORD, confirmPasswordRequestSaga);
  yield takeEvery(postActions.MODIFY_POST, updatePostRequestSaga);
  yield takeEvery(postActions.DELETE_POST, deletePostRequestSaga);
}

export default baseSaga;
