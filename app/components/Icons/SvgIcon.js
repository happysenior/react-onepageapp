import styled from 'styled-components';
import colors from 'constants/colors';

const SvgIcon = styled.svg`
  &:hover {
    path {
      stroke: ${colors.primaryDark};
    }
    rect {
      stroke: ${colors.primaryDark};
    }
  }
`;

export default SvgIcon;
