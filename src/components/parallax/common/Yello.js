import styled, { keyframes } from "styled-components";

import Circle from "./Circle";
import Yello from "./yello.png";

const MoonBackgroundAnimation = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

export default styled(Circle)`
  width: 400px;
  height: 400px;
  background-image: url(${Yello});
  background-size: cover;

  animation: ${MoonBackgroundAnimation} 120s linear infinite;
`;
