/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from '../reducers/home';

const selectHome = state => state.home || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectHome,
    homeState => homeState.error,
  );

const makeSelectUserList = () =>
  createSelector(
    selectHome,
    homeState => homeState.users,
  );

export { selectHome, makeSelectLoading, makeSelectError, makeSelectUserList };
