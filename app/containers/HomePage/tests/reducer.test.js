import produce from 'immer';

import homeReducer from 'redux/reducers/home';
import {
  userListLoadingAction,
  userListLoadingSuccessAction,
  userListLoadingErrorAction,
} from 'redux/actions/home';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      users: [],
      loading: false,
      error: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the userListLoadingAction correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
    });

    expect(homeReducer(state, userListLoadingAction())).toEqual(expectedResult);
  });

  it('should handle the userListLoadingSuccessAction correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.users = [];
    });

    expect(homeReducer(state, userListLoadingSuccessAction([]))).toEqual(
      expectedResult,
    );
  });

  it('should handle the userListLoadingErrorAction correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = true;
    });

    expect(homeReducer(state, userListLoadingErrorAction(false))).toEqual(
      expectedResult,
    );
  });
});
