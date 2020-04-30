/*
 * App Actions
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
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
} from '../actionTypes/app';

/**
 * Load the user, this action starts the request saga
 * in the real world,this should be called at login page
 *
 * @return {object} An action object with a type of LOAD_USER
 */
export function loadUserAction(userId) {
  return {
    type: LOAD_USER,
    payload: {
      userId,
    },
  };
}

export function loadUserSuccessAction(user) {
  return {
    type: LOAD_USER_SUCCESS,
    payload: {
      user,
    },
  };
}

/**
 * Dispatched when loading the user fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_USER_ERROR passing the error
 */
export function loadUserErrorAction(error) {
  return {
    type: LOAD_USER_ERROR,
    error,
  };
}
