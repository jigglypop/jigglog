import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;

export const SmallTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(22, 22, 22, 0.2);
  font-size: 12px;
  font-weight: 800;
  min-width: 50px;
  position: relative;
  height: 30px;
  width: 200px;
  animation: ${blink} 1s infinite;

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 0 10px #1d1d1d;

  h1 {
    color: #e7e7e7;
    text-shadow: 0 0 10px e7e7e7;
    transition: all 0.3s ease-in;
  }

  &:hover {
    h1 {
      color: #fd2e2e;
      text-shadow: 0 0 10px #fd2e2e;
    }
  }
`;
