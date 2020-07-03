import styled from "styled-components";

export const PostContent = styled.section`
  font-family: "NanumBarunGothic" !important;
  padding: 1em 1em 4em;
  line-height: 2em;

  h1 {
    margin-top: 40px;
    font-size: 50px;
    text-shadow: 3px 3px 3px gray;
  }
  h2 {
    margin-top: 40px;
    font-size: 28px;
    text-shadow: 3px 3px 3px gray;
  }
  h3 {
    margin-top: 40px;
    font-size: 24px;
    text-shadow: 2px 2px 2px gray;
  }
  h4 {
    margin-top: 40px;
    font-size: 21px;
  }
  h5 {
    margin-top: 40px;
    font-size: 18px;
    text-shadow: 2px 2px 2px gray;
  }
  p {
    font-size: 16px;
  }
  blockquote {
    line-height: 1.2em;
    color: #aaa;
    font-size: 24px;
  }
  pre {
    margin: 20px 0 0;
  }
`;

export const ImageWrapper = styled.div`
  .jb-wrap {
    width: 40%;
    margin: 10px auto;
    position: relative;
  }
  .jb-wrap img {
    width: 100%;
    vertical-align: middle;
  }
  .jb-text {
    color: white;
    font-weight: 800;
    text-shadow: 2px 2px 2px gray;
    font-size: 20px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
