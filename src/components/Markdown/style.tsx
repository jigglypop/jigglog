import styled from 'styled-components';
import { PostContentOrigin } from '../Post/styled';

export const LinkButton = styled.div`
  position: fixed;
  top: 100px;
  right: 100px;
  border: none;
  border: 10px;
  width: 60px;
  height: 40px;
  margin: 5px;
  z-index: 10;

  a {
    button {
      font-family: 'Do Hyeon', sans-serif;
      font-size: 20px;
      color: black;
      font-weight: 800;
    }
  }
  button {
    font-family: 'Do Hyeon', sans-serif;
    font-size: 20px;
    color: black;
    font-weight: 800;
  }

  .link-inner {
    width: 30px;
    height: 30px;
  }
`;

export const ButtonInline = styled.div``;

export const MarkDownWrapper = styled.div`
  background: #1d1d1d;
  position: fixed;
  padding: 100px 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .title {
    font-family: 'Do Hyeon', sans-serif;
    font-size: 80px;
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

  .under {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
export const MarkDownWrite = styled.div`
  background: white;
  margin: 20px;
  /* width: 60vw; */
  height: 100%;
  grid-column: 1/2;

  textarea {
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    height: 100%;
  }
`;

export const MarkDownPostWrapper = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 0;
`;
export const MarkDownPostContent = styled(PostContentOrigin)`
  background: white;
  /* transform: scale(0.6) translateY(-30%) translateX(-35%); */

  em {
    visibility: visible;
    line-height: 1.2em;
    font-weight: 1000;
    margin-top: 18px;
    font-size: 20px;
    text-decoration: underline;
  }
  code {
    position: relative;
    visibility: visible;
  }
  del {
    visibility: visible;
    text-decoration: none;
    color: gray;
  }
  ol,
  ul {
    list-style: unset !important;
    margin: 0;
    padding: 0;
  }

  .gatsby-highlight pre[class*='language-'] {
    min-width: 100%;
    font-family: 'NanumBarunGothic' !important;
    padding: 30px;
  }
  pre {
    color: white;
    background-color: #373b44;
    padding: 7px;
    @media (max-width: 600px) {
      margin-top: -100px;
      font-size: 10px;
    }
  }
  .language-text {
    margin: 5px;
    @media (max-width: 600px) {
      margin-top: -100px;
      font-size: 10px;
    }
  }
`;
