import styled, { keyframes } from "styled-components";

import Circle from "./Circle";
import moon from "./moon.jpg";

const MoonBackgroundAnimation = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

export default styled(Circle)`
  width: 300px;
  height: 300px;
  background-image: url(${moon});
  background-size: cover;

  animation: ${MoonBackgroundAnimation} 120s linear infinite;
`;
