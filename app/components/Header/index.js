import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import colors from 'constants/colors';
import device from 'constants/device';

import notificationIcon from 'assets/svg/notification.svg';
import hamburgerIcon from 'assets/svg/hamburger.svg';

import messages from './messages';

import HeaderLink from './HeaderLink';
import Navbar from './NavBar';
import UserAvatar from './UserAvatar';
import Img from '../Img';

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  @media ${device.desktopL} {
    flex-direction: row;
    & > div {
      width: 50%;
    }
  }

  @media ${device.laptop} {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;

const NavigationWrapper = styled.div`
  padding: 27px 29px;
  background-color: ${colors.primaryLight};
`;

const UserAccountWrapper = styled.div`
  padding: 20px 29px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media ${device.desktopL} {
    justify-content: space-between;
  }
`;

const UserName = styled.span`
  font-size: 14px;
  line-height: 24px;
  margin-left: 10px;
  align-self: center;
  white-space: nowrap;
  color: ${colors.secondaryDark};
`;

const UserInfo = styled.div``;

const IconGroup = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NotificationWrapper = styled.div`
  margin-right: 20px;
  & > img {
    width: 30px;
    height: 21px;
  }

  &:hover {
    color: ${colors.primaryDark};
  }
`;

const NotificationCount = styled.span`
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-left: 4px;
  color: ${colors.secondaryDark};
`;

const Hamburger = styled.div`
  & > img {
    width: 15px;
    height: 14px;
  }
  &:hover {
    color: ${colors.primaryDark};
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends React.Component {
  static propTypes = {
    currentUser: PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      avatar: PropTypes.string,
    }),
  };

  static defaultProps = {
    currentUser: null,
  };

  render() {
    const { currentUser } = this.props;
    const userName = currentUser
      ? `${currentUser.first_name} ${currentUser.last_name}`
      : '';
    const avatar = currentUser ? currentUser.avatar : '';

    return (
      <HeaderWrapper>
        <NavigationWrapper>
          <Navbar>
            <HeaderLink to="/">
              <FormattedMessage {...messages.browse} />
            </HeaderLink>
            <HeaderLink to="/">
              <FormattedMessage {...messages.howItWorks} />
            </HeaderLink>
            <HeaderLink to="/">
              <FormattedMessage {...messages.help} />
            </HeaderLink>
            <HeaderLink to="/">
              <FormattedMessage {...messages.about} />
            </HeaderLink>
          </Navbar>
        </NavigationWrapper>
        <UserAccountWrapper>
          <UserInfo>
            <UserAvatar src={avatar} alt="" />
            <UserName>{userName}</UserName>
          </UserInfo>
          <IconGroup>
            <NotificationWrapper>
              <Img src={notificationIcon} alt="notification" />
              <NotificationCount>2</NotificationCount>
            </NotificationWrapper>
            <Hamburger>
              <Img src={hamburgerIcon} alt="hamburger" />
            </Hamburger>
          </IconGroup>
        </UserAccountWrapper>
      </HeaderWrapper>
    );
  }
}
