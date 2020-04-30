import { all } from 'redux-saga/effects';
import homeListener from './home';

export default function* rootSaga() {
  yield all([homeListener()]);
}
