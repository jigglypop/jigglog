import styled from "styled-components";


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