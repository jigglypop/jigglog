import styled from 'styled-components';

export const SmallTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(22, 22, 22, 0.2);
  font-size: 8px;
  font-weight: 800;
  min-width: 50px;
  position: relative;
  height: 30px;
  width: 130px;

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 0 10px #1d1d1d;

  h1 {
    color: #e7e7e7;
    text-shadow: 0 0 10px e7e7e7;
  }
`;
