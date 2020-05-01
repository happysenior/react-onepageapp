import { selectLanguage } from 'redux/selectors/language';

describe('selectLanguage', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      language: globalState,
    };
    expect(selectLanguage(mockedState)).toEqual(globalState);
  });
});
