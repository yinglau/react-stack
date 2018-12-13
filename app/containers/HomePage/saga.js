import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import {
  HOME_CHANGE_TITLE,
} from './actions';

function *chgTitle(action) {
  console.log(action.type);
  try {
    // yield put(changeTitle(action.title + 'saga title'));
    console.log('run chg home title aaaa')
  } catch (e) {
    console.log('saga error');
  }
}

function *fetchPost() {
  try {
    const res = yield call(request, 'https://cnodejs.org/api/v1/topics');
    console.log('xxx', res);
  } catch (e) {

  }
}

export default function *saga() {
  yield takeEvery(HOME_CHANGE_TITLE, chgTitle);
  yield takeEvery('HOME_FETCH', fetchPost);
}
