import styled from "styled-components";

export const ImageWrapper = styled.div`
  .jb-wrap {
    width: 60%;
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
    font-size: 25px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
