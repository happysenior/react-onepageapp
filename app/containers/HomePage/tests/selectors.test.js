import { selectHome, makeSelectUserList } from 'redux/selectors/home';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      users: [],
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectUserList', () => {
  it('should select users', () => {
    const mockedState = {
      home: {
        users: [],
      },
    };
    expect(makeSelectUserList(mockedState)).toEqual([]);
  });
});
