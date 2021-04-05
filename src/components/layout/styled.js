import styled from "styled-components";

export const LayoutWrapper = styled.div`
  background: linear-gradient(90deg, #8e2de2, #4a00e0);

  position: absolute;
  background: transparent;
  width: 100vw;
  height: ${props => props.isMain? "80px" : '100vh'};
  overflow: scroll;
  z-index: 1;
  ::-webkit-scrollbar{
    background-color: ${props => props.isMain? "transparent" : '#141414'};
  }
  ::-webkit-scrollbar-corner{
    background-color: ${props => props.isMain? "transparent" : '#141414'};
  }
`;

export const ThreeWrapper = styled.div`
  background: linear-gradient(45deg, #000000,  #434343);
  width: 100vw;
  height: 100vh;
`

export const OuterWrapper = styled.div`
  box-sizing: border-box;
  display: flex;

`
