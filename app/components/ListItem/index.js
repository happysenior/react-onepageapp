import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from 'constants/colors';
import device from 'constants/device';
import Wrapper from './Wrapper';
import ProfileAvatar from './ProfileAvatar';

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 20px 20px;
  border-bottom: 2px solid ${colors.greyLight};
  width: 100%;
  background-color: ${colors.backgroundLight};
  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const UserFullNameWrapper = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.secondaryDark};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media ${device.laptop} {
    width: 100px;
  }
  @media ${device.tablet} {
    width: 200px;
  }
`;

const UserInfo = styled.div``;

const EmailLabel = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 10px;
  text-align: right;
  color: ${colors.secondaryDark};
  mix-blend-mode: normal;
  opacity: 0.5;

  @media ${device.tablet} {
    display: none;
  }
  @media ${device.laptop} {
    display: none;
  }
`;

const EmailWrapper = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: ${colors.primaryDark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${device.laptop} {
    width: 150px;
    text-align: left;
  }
  @media ${device.tablet} {
    width: 200px;
    text-align: left;
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class ListItem extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <Wrapper>
        <ProfileAvatar avatar={user.avatar} />
        <ProfileInfoWrapper>
          <UserFullNameWrapper>
            {`${user.first_name} ${user.last_name}`}
          </UserFullNameWrapper>
          <UserInfo>
            <EmailLabel>User email address</EmailLabel>
            <EmailWrapper>{user.email}</EmailWrapper>
          </UserInfo>
        </ProfileInfoWrapper>
      </Wrapper>
    );
  }
}

ListItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

export default ListItem;
