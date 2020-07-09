import styled, { keyframes } from "styled-components";

import Circle from "./Circle";
import Earth from "./earth.jpg";

const MoonBackgroundAnimation = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

export default styled(Circle)`
  width: 300px;
  height: 300px;
  background-image: url(${Earth});
  background-size: cover;
  opacity: 0.7;

  animation: ${MoonBackgroundAnimation} 120s linear infinite;
`;
