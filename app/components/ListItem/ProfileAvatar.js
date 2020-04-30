import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

import NormalImg from 'components/Img';

import colors from 'constants/colors';

const AvatarWrapper = styled.div`
  width: 142px;
  height: 90px;
  background-color: ${colors.greyLight};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${colors.primaryLight};
`;

const ImgWrapper = styled(NormalImg)`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

const ProfileAvatar = props => (
  <AvatarWrapper>
    <ImgWrapper src={props.avatar} alt="" />
  </AvatarWrapper>
);

ProfileAvatar.propTypes = {
  avatar: Proptypes.string,
};
export default ProfileAvatar;
