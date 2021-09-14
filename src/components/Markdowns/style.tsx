import styled from 'styled-components';

export const MarkDowns = styled.div`
  background: #1d1d1d;
  position: fixed;
  padding: 200px;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .title {
    font-family: 'Do Hyeon', sans-serif;
    font-size: 120px;
    margin: 20px;
    font-weight: 800;
  }

  .titles {
    .titles-item {
      line-height: 2rem;
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
