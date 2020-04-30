/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectUserList,
  makeSelectLoading,
  makeSelectError,
} from 'redux/selectors/home';

import { userListLoadingAction } from 'redux/actions/home';

import Welcome from 'components/Welcome';
import PageLabel from 'components/PageLabel';
import PageDescription from 'components/PageDescription';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

import messages from './messages';
import device from '../../constants/device';

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 78px);
  @media ${device.desktopL} {
    flex-direction: row;
    & > div {
      width: 50%;
    }
  }

  @media ${device.tablet} {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;

const ProfileWrapper = styled.div`
  margin-top: 10px;
  padding: 0px 30px 0px 33px;
`;

const ProfileList = styled.div`
  height: calc(100vh - 198px);
  overflow: scroll;
  &::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${device.tablet} {
    height: 100%;
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends React.Component {
  static propTypes = {
    loadUsers: PropTypes.func.isRequired,
    users: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.bool,
  };

  static defaultProps = {
    users: [],
  };

  componentDidMount = () => {
    this.props.loadUsers();
  };

  render() {
    const { users, loading, error } = this.props;
    return (
      <HomeContainer>
        <Welcome />
        <ProfileWrapper>
          <PageLabel>
            <FormattedMessage {...messages.profileListLabel} />
          </PageLabel>
          <PageDescription>
            <FormattedMessage {...messages.profileListMessage} />
          </PageDescription>
          <ProfileList>
            {loading && !error ? (
              <LoadingIndicator />
            ) : (
              users.map(user => (
                <ListItem key={`user_${user.id}`} user={user} />
              ))
            )}
          </ProfileList>
          <div>{error ? <span>something went wrong</span> : null}</div>
        </ProfileWrapper>
      </HomeContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  users: makeSelectUserList(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => dispatch(userListLoadingAction()),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
