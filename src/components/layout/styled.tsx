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
    color: #919191;
  }
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;
  position: fixed;

  background: rgba(22, 22, 22, 0.2);
  top: 100px;
  right: 100px;
  line-height: 1.5rem;
  font-size: 12px;
  min-width: 50px;
  height: 250px;
  width: 400px;
  color: white;
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 0 10px #1d1d1d;
  z-index: 20;

  h1 {
    font-size: 26px;
    font-weight: 800;
    margin: 20px;
    text-shadow: 0 0 10px white;
  }
  h3 {
    font-size: 12px;
    font-weight: 600;
  }
  h2 {
    font-size: 12px;
    margin: 10px;
    font-weight: 600;
    text-shadow: 0 0 10px white;
  }

  &.isWide {
    display: none;
  }
`;

export const MainTitle = styled.div`
  position: absolute;
  justify-content: center;
  text-align: center;
  background: rgba(22, 22, 22, 0.2);

  border-radius: 10px;
  padding: 10px;
  --webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 20;

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
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export interface ILayoutWrapper {
  isMain: boolean;
}

export const LayoutWrapper = styled.div<ILayoutWrapper>`
  background: linear-gradient(90deg, #8e2de2, #4a00e0);
  position: absolute;
  background: transparent;
  width: 100%;
  height: ${props => (props.isMain ? '80px' : '100vh')};
`;

export const ThreeWrapper = styled.div`
  background: black;
  width: 100vw;
  height: 100vh;
`;

export const OuterWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
`;
