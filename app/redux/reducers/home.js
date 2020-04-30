/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  USER_LIST_LOADING,
  USER_LIST_LOADING_SUCCESS,
  USER_LIST_LOADING_ERROR,
} from '../actionTypes/home';

// The initial state of the App
export const initialState = {
  users: [],
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case USER_LIST_LOADING:
        draft.loading = true;
        draft.error = false;
        break;
      case USER_LIST_LOADING_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.users = [...action.payload.users];
        break;
      case USER_LIST_LOADING_ERROR:
        draft.loading = false;
        draft.error = true;
    }
  });

export default homeReducer;
