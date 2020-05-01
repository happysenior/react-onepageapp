/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import ApiEndpoint from 'utils/api';
import request from 'utils/request';

import { LOAD_USER } from '../actionTypes/app';
import { USER_LIST_LOADING } from '../actionTypes/home';

import { loadUserSuccessAction, loadUserErrorAction } from '../actions/app';

import {
  userListLoadingSuccessAction,
  userListLoadingErrorAction,
} from '../actions/home';

const api = new ApiEndpoint();

export function* getCurrentUser({ payload: { userId } }) {
  // Select username from store
  const requestURL = api.getUserByIdPath(userId);

  try {
    const user = yield call(request, requestURL);
    yield put(loadUserSuccessAction(user.data));
  } catch (err) {
    yield put(loadUserErrorAction(err));
  }
}

export function* getUsers() {
  /**
   * get only 15 users
   */

  const pageNum = 1;
  const perPage = 15;

  const requestURL = api.getUserListPath(pageNum, perPage);

  try {
    const users = yield call(request, requestURL);

    users.data.sort((a, b) => {
      const nameA = `${a.first_name.toUpperCase()} ${a.last_name.toUpperCase()}`; // ignore upper and lowercase
      const nameB = `${b.first_name.toUpperCase()} ${b.last_name.toUpperCase()}`; // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });

    yield put(userListLoadingSuccessAction(users.data));
  } catch (err) {
    yield put(userListLoadingErrorAction(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  // Watches for USER_LIST_LOADING actions and calls getUsers when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(USER_LIST_LOADING, getUsers);
  yield takeLatest(LOAD_USER, getCurrentUser);
}
