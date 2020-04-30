import { createGlobalStyle } from 'styled-components';
import device from 'constants/device';
import colors from 'constants/colors';
import wigrumRegular from './assets/fonts/wigrum.otf';
import wigrumBlack from './assets/fonts/wigrum-black.otf';
import wigrumBold from './assets/fonts/wigrum-bold.otf';
import wigrumLight from './assets/fonts/wigrum-light.otf';
import wigrumMedium from './assets/fonts/wigrum-medium.otf';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
    width: 100%;
    line-height: 1.5;
  }

  @font-face {
    font-family: "Wigrum Regular";
    src: url('${wigrumRegular}') format("truetype");
  }

  @font-face {
    font-family: "Wigrum Black";
    src: url('${wigrumBlack}') format("truetype");
  }

  @font-face {
    font-family: "Wigrum";
    src: url('${wigrumBold}') format("truetype");
  }

  @font-face {
    font-family: "Wigrum Light";
    src: url('${wigrumLight}') format("truetype");
  }

  @font-face {
    font-family: "Wigrum Medium";
    src: url('${wigrumMedium}') format("truetype");
  }

  body {
    font-family: 'Wigrum Regular', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Wigrum Regular', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    height: 100%;
    @media ${device.desktopL} {
      background-color: ${colors.backgroundLight};
    }
    @media ${device.laptop} {
      background-color: ${colors.backgroundDark};
    }
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
