import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'constants/colors';

export default styled(Link)`
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-style: normal;
  font-weight: normal;
  color: #000000;
  mix-blend-mode: normal;
  font-size: 18px;
  line-height: 18px;
  width: 210px;
  height: 50px;
  border: 1px solid ${colors.secondaryDark};
  text-align: center;
  padding: 10px;
`;
