import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import pattern from 'assets/images/pattern.png';
import circle from 'assets/images/circle.png';
import iconForm from 'assets/images/icon-form.png';

import SetUpButton from './SetUpButton';

import messages from './messages';

import device from '../../constants/device';
import colors from '../../constants/colors';

const WelcomeWrapper = styled.div`
  background-color: ${colors.primaryLight};
  position: relative;
`;

const WelcomeMessage = styled.div`
  width: 301px;
  height: 64px;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  color: #000000;
`;

const Greeting = styled.div`
  height: 32%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundWrapper = styled.div`
  height: 30%;
  width: 100%;
  padding: 10px;
  position: relative;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90%;
  z-index: 1;
  @media ${device.tablet} {
    height: 130%;
  }
`;

const Circle = styled.img`
  height: 90%;
`;

const Pattern = styled.img`
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 2;
  position: relative;
`;

const IconFormWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  @media ${device.tablet} {
    height: 70%;
  }
`;

const IconForm = styled.img`
  height: 100%;
`;

const ButtonWrapper = styled.div`
  margin: 33px auto auto auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DescriptionLabelWrapper = styled.div`
  margin: 10px 0 10px 0;
  position: relative;
  display: flex;
  height: 12%;
  @media ${device.tablet} {
    display: none;
  }
`;

const DescriptionLabel = styled.div`
  font-style: normal;
  font-weight: bold;
  line-height: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${colors.secondaryDark};
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 10px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    display: none;
  }
`;

const Description = styled.div`
  width: 504px;
  height: 72px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: ${colors.secondaryDark};
  mix-blend-mode: normal;
  opacity: 0.75;
`;

// eslint-disable-next-line react/prefer-stateless-function
class Welcome extends React.Component {
  openNewTab = () => {
    window.open('https://google.com', '_blank');
  };

  render() {
    return (
      <WelcomeWrapper>
        <Greeting>
          <WelcomeMessage>
            <FormattedMessage {...messages.welcome} />
          </WelcomeMessage>
        </Greeting>
        <BackgroundWrapper>
          <CircleWrapper>
            <Circle src={circle} alt="circle" />
          </CircleWrapper>
          <Pattern src={pattern} alt="pattern" />
          <IconFormWrapper>
            <IconForm src={iconForm} alt="iconForm" />
          </IconFormWrapper>
        </BackgroundWrapper>
        <ButtonWrapper>
          <SetUpButton onClick={this.openNewTab}>
            <FormattedMessage {...messages.setUpYourAccount} />
          </SetUpButton>
        </ButtonWrapper>
        <DescriptionLabelWrapper>
          <DescriptionLabel>
            <FormattedMessage {...messages.descriptionLabel} />
          </DescriptionLabel>
        </DescriptionLabelWrapper>
        <DescriptionWrapper>
          <Description>
            <FormattedMessage {...messages.descriptionMessage} />
          </Description>
        </DescriptionWrapper>
      </WelcomeWrapper>
    );
  }
}
export default Welcome;
