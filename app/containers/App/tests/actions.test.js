import {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
} from 'redux/actionTypes/app';

import {
  loadUserAction,
  loadUserSuccessAction,
  loadUserErrorAction,
} from 'redux/actions/app';

describe('App Actions', () => {
  describe('', () => {
    it('should return the correct type', () => {
      const testUserId = 1;
      const expectedResult = {
        type: LOAD_USER,
        payload: {
          userId: testUserId,
        },
      };

      expect(loadUserAction(testUserId)).toEqual(expectedResult);
    });
  });

  describe('loadUserSuccessAction', () => {
    it('should return the correct type and the passed repos', () => {
      const expectedResult = {
        type: LOAD_USER_SUCCESS,
        payload: {
          user: [],
        },
      };

      expect(loadUserSuccessAction([])).toEqual(expectedResult);
    });
  });

  describe('loadUserErrorAction', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_USER_ERROR,
        error: fixture,
      };

      expect(loadUserErrorAction(fixture)).toEqual(expectedResult);
    });
  });
});
