/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { USER_LIST_LOADING } from 'redux/actionTypes/home';

import {
  userListLoadingSuccessAction,
  userListLoadingErrorAction,
} from 'redux/actions/home';

import rootSaga, { getUsers } from 'redux/sagas/home';

/* eslint-disable redux-saga/yield-effects */
describe('getRepos Saga', () => {
  let getUsersGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getUsersGenerator = getUsers();

    const selectDescriptor = getUsersGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getUsersGenerator.next([]).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the userListLoadingSuccessAction if it requests the data successfully', () => {
    const response = [];
    const putDescriptor = getUsersGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(userListLoadingSuccessAction(response)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getUsersGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(userListLoadingErrorAction(response)));
  });
});

describe('githubDataSaga Saga', () => {
  const sagaIterator = rootSaga();

  it('should start task to watch for USER_LIST_LOADING action', () => {
    const takeLatestDescriptor = sagaIterator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(USER_LIST_LOADING, getUsers),
    );
  });
});
