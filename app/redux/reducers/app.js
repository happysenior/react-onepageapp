/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_USER_SUCCESS,
  LOAD_USER,
  LOAD_USER_ERROR,
} from '../actionTypes/app';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_USER:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_USER_SUCCESS:
        draft.loading = false;
        draft.currentUser = action.payload.user;
        break;

      case LOAD_USER_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
