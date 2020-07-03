import styled from "styled-components";

export const Title = styled.div`
  animation: blink 1.5s ease-in-out infinite alternate;

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
`;

export const TitleRed = styled.div`
  color: #e94057;
  font-size: 20px;
  font-weight: 800;
  text-shadow: 4px 4px 40px white;
`;

export const Content = styled.div`
  font-size: 20px;
  font-weight: 800;
  text-shadow: 4px 4px 40px white;
`;
