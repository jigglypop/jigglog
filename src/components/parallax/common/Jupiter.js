import styled, { keyframes } from "styled-components";

import Circle from "./Circle";
import Jupiter from "./jupiter.png";

const MoonBackgroundAnimation = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

export default styled(Circle)`
  width: 300px;
  height: 300px;
  background-image: url(${Jupiter});
  background-size: cover;
  box-shadow: 0 0 40px 0px #fff;

  animation: ${MoonBackgroundAnimation} 120s linear infinite;
`;
