import produce from 'immer';

import appReducer from 'redux/reducers/app';

import {
  loadUserAction,
  loadUserSuccessAction,
  loadUserErrorAction,
} from 'redux/actions/app';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      currentUser: null,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadUserAction correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
    });

    expect(appReducer(state, loadUserAction())).toEqual(expectedResult);
  });

  it('should handle the loadUserSuccessAction correctly', () => {
    const firstUser = {
      id: 1,
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
    };

    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.currentUser = { ...firstUser };
    });

    expect(appReducer(state, loadUserSuccessAction(firstUser))).toEqual(
      expectedResult,
    );
  });

  it('should handle the userLoadErrorAction correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, loadUserErrorAction(fixture))).toEqual(
      expectedResult,
    );
  });
});
