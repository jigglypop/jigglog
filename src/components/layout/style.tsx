import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import NanumBarunGothicSubset from './fonts/NanumBarunGothicSubset.woff2';

export const GlobalFont = createGlobalStyle`
    @font-face {
        font-family: "NanumBarunGothicSubset";
        src: local("NanumBarunGothicSubset"),
        url(${NanumBarunGothicSubset}) format('woff2');
    }
`;
export const Wrapper = styled.div`
  background: linear-gradient(90deg, #8e2de2, #4a00e0);
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

export const OuterWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
`;
