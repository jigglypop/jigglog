import styled from 'styled-components';

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
  background: linear-gradient(45deg, #000000, #434343);
  width: 100vw;
  height: 100vh;
`;

export const OuterWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
`;
