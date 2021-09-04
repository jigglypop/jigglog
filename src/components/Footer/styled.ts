import styled from 'styled-components';

// 헤더바
export const FooterDiv = styled.nav`
  transition: all 0.3s ease-in-out;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  bottom: 0;
  height: 40px;
  width: 100%;
  font-size: 10px;
  font-weight: 600;
  z-index: 2;
  background: rgba(0, 0, 0, 0.9);
  -webkit-backdrop-filter: brightness(1.1) blur(50px);
  backdrop-filter: brightness(1.1) blur(50px);
  .text {
    font-size: 10px;
    font-weight: 800;
  }
`;
