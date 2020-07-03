import styled from "styled-components";

export const Wrapper = styled.section`
  font-family: "NanumBarunGothic" !important;
  margin: 1em 0;
  p {
    position: "absolute";
    margin-top: 12px;
    margin-left: 5px;
    font-size: 20px;
    text-shadow: 2px 2px 2px gray;
    color: white;
  }
  a {
    color: #000;
  }

  span,
  img {
    display: inline-block;
    vertical-align: middle;
    border-color: white;
  }

  img {
    margin: 0 4px 0 0;
    border-radius: 50%;
  }

  small {
    color: #999;
    font-size: 90%;
  }
`;
