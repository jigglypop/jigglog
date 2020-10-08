import styled from "styled-components";

export const ButtonInline = styled.div``;

export const PostWrapper = styled.div`
  margin: auto;
  padding: 10px 0 0;
  margin: 0 40px 40px 40px;
  font-size: 16px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 10px black;
  @media (max-width: 600px) {
    padding: 70px 16px 0;
    margin: 0 10px 10px 10px;
  }

  &:before,
  &:after {
    display: block;
    content: "";
    clear: both;
  }

  h1 {
    margin: 0.67em 0;
    font-size: 36px;
  }

  time {
    margin: 1em 0;
    font-size: 14px;
  }
  a {
    font-size: 12px;
    font-weight: 800;
    color: gray;
  }
`;

export const CommentContent = styled.div`
  padding: 50px;
  line-height: 2em;
  color: black;
  h1 {
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 40px;
    font-weight: 800;
  }
  h2 {
    margin-top: 40px;
    font-size: 28px;
    font-weight: 800;
  }
  h3 {
    margin-top: 40px;
    font-size: 24px;
    font-weight: 800;
  }
  h4,
  h5 {
    margin-top: 40px;
    font-weight: 800;
    font-size: 21px;
  }
  p {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 100;
  }
  strong {
    margin-top: 100px;
    font-size: 18px;
    font-weight: 800;
  }
  li {
    margin-top: 10px;
    margin-left: 30px;
    font-size: 18px;
    font-weight: 100;
  }
  blockquote {
    line-height: 1.2em;
    color: #aaa;
    margin-top: 18px;
    font-size: 18px;
  }
  pre,
  span {
    margin-top: 10px;
    font-size: 14px;
  }
  table {
    margin: 20px;
    background: #f9f9f9;
  }
  th,
  tr,
  td {
    border: 2px solid gray;
    color: black;
    padding: 10px;
    margin-top: 10px;
    font-size: 14px;
  }

  @media (max-width: 1000px) {
    padding: 10px;
    line-height: 2em;
    color: black;
    h1 {
      margin-top: 2px;
      margin-bottom: 2px;
      font-size: 18px;
    }
    h2 {
      margin-top: 2px;
      font-size: 14px;
    }
    h3 {
      margin-top: 2px;
      font-size: 10px;
    }
    h4,
    h5,
    p,
    blockquote,
    pre {
      margin-top: 5px;
      font-size: 10px;
    }
    li {
      margin-top: 5px;
      font-size: 10px;
      margin-left: 30px;
    }
    table {
      margin: 20px;
    }
    th,
    tr,
    td,
    span,
    strong {
      font-size: 10px;
    }
  }
`;
export const PostContent = styled.div`
  padding: 0 20px 20px 20px;
  line-height: 2em;
  color: black;
  h1 {
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 32px;
    font-weight: 800;
  }
  h2 {
    margin-top: 40px;
    font-size: 28px;
    font-weight: 800;
  }
  h3 {
    margin-top: 40px;
    font-size: 24px;
    font-weight: 800;
  }
  h4,
  h5 {
    margin-top: 40px;
    font-weight: 800;
    font-size: 21px;
  }
  p {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 100;
  }
  strong {
    margin-top: 100px;
    font-size: 22px;
    font-weight: 800;
  }
  li {
    margin-top: 10px;
    margin-left: 30px;
    font-size: 18px;
    font-weight: 100;
  }
  blockquote {
    line-height: 1.2em;
    color: #aaa;
    margin-top: 18px;
    font-size: 18px;
  }
  em {
    visibility: ${(props) => props.lines};
    line-height: 1.2em;
    font-weight: 1000;
    margin-top: 18px;
    font-size: 18px;
    text-decoration: underline;
  }
  pre,
  span {
    margin-top: 10px;
    font-size: 14px;
  }
  table {
    margin: 20px;
    background: #f9f9f9;
  }
  th,
  tr,
  td {
    border: 2px solid gray;
    color: black;
    padding: 10px;
    margin-top: 10px;
    font-size: 14px;
  }
  hr {
    margin-bottom: 30px;
  }
  code {
    visibility: ${(props) => props.answer};
  }
  del {
    visibility: ${(props) => props.dels};
    text-decoration: none;
    color: gray;
  }

  @media (max-width: 1000px) {
    padding: 0 10px 10px 10px;
    line-height: 2em;
    color: black;
    hr {
      margin-bottom: 10px;
    }
    h1 {
      margin-top: 2px;
      margin-bottom: 2px;
      font-size: 18px;
    }
    h2 {
      margin-top: 2px;
      font-size: 14px;
    }
    h3 {
      margin-top: 2px;
      font-size: 10px;
    }
    h4,
    h5,
    p,
    blockquote,
    pre {
      margin-top: 5px;
      font-size: 10px;
    }
    li {
      line-height: 2.5em;
      margin-top: 5px;
      font-size: 10px;
      margin-left: 10px;
    }
    table {
      margin: 20px;
    }
    th,
    tr,
    td,
    span,
    em {
      font-size: 10px;
    }
    strong {
      font-size: 14px;
    }
  }
`;

export const PrintTitle = styled.div`
  font-size: 15px;
  font-weight: 800;
  margin: 5px;
  text-shadow: 3px 3px 30px white;
`;
export const ClearMobile = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  border: 1px solid ${({ theme: { color } }) => color};
  border-radius: 4px;
  outline: 0;
`;

export const ImageWrapper = styled.div`
  .jb-wrap {
    max-height: 400px;
    width: 100%;
    margin: 10px auto;
    position: relative;
    overflow: hidden;
  }
  .jb-wrap img {
    max-height: initial;
    width: 100%;
    vertical-align: middle;
  }
  .jb-text {
    color: white;
    font-weight: 800;
    text-shadow: 2px 2px 20px white;
    font-size: 30px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -100px;

    animation: blink 1.2s ease-in-out infinite alternate;
    @media (max-width: 600px) {
      font-size: 15px;
    }

    @keyframes blink {
      50% {
        opacity: 0.8;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
export const WarpVisible = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Visible = styled.div`
  position: sticky;
  top: 70px;
  display: block;
  align-items: center;
  text-align: center;
  h4 {
    font-size: 14px;
    font-weight: 800;
  }
  @media (max-width: 1200px) {
    h4 {
      font-size: 10px;
      font-weight: 800;
    }
  }
  @media (max-width: 992px) {
    display: none;
  }
  .lineblock {
    display: inline-block;
  }
  .smallcircle {
    display: inline-block;
    padding-left: 30px;
    font-weight: 800;
    color: greenyellow;
    vertical-align: middle;
  }
`;

export const VisibleTable = styled.div`
  position: sticky;
  display: block;
  top: 20vh;
  align-items: center;
  text-align: center;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const ComponentInPost = styled.div`
  position: relative;
  margin: 1em 0 1em;
  padding: 55px 16px 16px;
  color: #263238;
  border: 1px solid #263238;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  &:before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: 0 0 0 80px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    color: #fff;
    background-color: #263238;
    font-weight: 100;
    content: "Application for example";
  }
  &:after {
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 20px;
    width: 10px;
    height: 10px;
    background-color: #ff5f56;
    border-radius: 50%;
    content: "";
  }
  & > *:first-child {
    &:before {
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 40px;
      width: 10px;
      height: 10px;
      background-color: #ffbd2e;
      border-radius: 50%;
      content: "";
    }
    &:after {
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 60px;
      width: 10px;
      height: 10px;
      background-color: #27c93f;
      border-radius: 50%;
      content: "";
    }
  }
`;



