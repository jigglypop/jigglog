import styled from "styled-components";

export const MainTitle = styled.div`
  position: absolute;
  justify-content: center;
  text-align: center;
  background-color: black;
  z-index: 10;
  h1 {
    padding: 10px;
    font-size: 40px;
    font-weight: 800;
    color: white;
  }
  h3 {
    padding: 10px;
    font-size: 15px;
    font-weight: 800;
    color: white;
  }
  left:50%;
  top: 50%;
  transform: translate(-50%, -50%);
`


export const BlinkImage = styled.img`
  animation: blink 0.5s ease-in-out infinite alternate;
  @keyframes blink {
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const IconWrapper = styled.div`
  position: absolute;
  margin-left: 60%;
  margin-top: 10%;
  z-index: 18;
  @media (max-width: 1000px) {
    font-size: 20px;
    margin-top: 30%;
  }
`;

export const Title = styled.div`
  animation: blink 1.2s ease-in-out infinite alternate;
  @keyframes blink {
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  font-size: 40px;
  font-weight: 800;
  text-shadow: 4px 4px 40px white;
  @media (max-width: 600px) {
    font-size: 20px;
    font-weight: 800;
    text-shadow: 4px 4px 40px white;
  }
`;

export const TitleRed = styled.div`
  color: #e94057;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 800;
  text-shadow: 4px 4px 40px #e94057;
  @media (max-width: 600px) {
    font-size: 13px;
    font-weight: 800;
    text-shadow: 4px 4px 40px white;
  }
`;

export const Content = styled.div`
  font-size: 20px;
  font-weight: 800;
  text-shadow: 4px 4px 40px white;
  @media (max-width: 600px) {
    font-size: 13px;
    font-weight: 800;
    text-shadow: 4px 4px 40px white;
  }
`;

export const ToolTip = styled.div`
  position: absolute;
  top: 10%;
  right: 3%;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: black;
  z-index: 10;
  width: 30vw;
  height: 40vh;

  border: 2px solid #8E2DE2;

  color: white;
  padding: 20px;
  visibility: hidden;
  line-height: 2em;

  h1{
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 10px;
  }
  h2{
    color: #FF416C;
    font-size: 15px;
    font-weight: 800;
  }
  h3 {
    font-size: 12px;
    font-weight: 800;
    color: white;
  }
  h4 {
    padding: 10px;
    font-size: 10px;
    font-weight: 800;
    color: white;
  }
  &.isvisible{
    visibility: visible;
  }
  @media (max-width: 1000px) {
    h3 {
      display: none;
    }
  }
  @media (max-width: 600px) {
    h4 {
      display: none;
    }
  }
`