/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  USER_LIST_LOADING,
  USER_LIST_LOADING_SUCCESS,
  USER_LIST_LOADING_ERROR,
} from '../actionTypes/home';

export function userListLoadingAction() {
  return {
    type: USER_LIST_LOADING,
  };
}

export function userListLoadingSuccessAction(users) {
  return {
    type: USER_LIST_LOADING_SUCCESS,
    payload: {
      users,
    },
  };
}

export function userListLoadingErrorAction(error) {
  return {
    type: USER_LIST_LOADING_ERROR,
    error,
  };
}
