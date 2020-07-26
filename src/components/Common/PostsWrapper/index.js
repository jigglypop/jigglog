import styled from "styled-components";

const PostsWrapper = styled.div`
  background: linear-gradient(90deg, #5c258d, #4389a2) !important;
  margin: auto;
  padding: 10vw;
  max-width: 100%;
  font-size: 0;
  /* .cardpage {

    padding: 100px;
  } */
  @media (max-width: 1000px) {
    padding: 10%;
  }

  &:before,
  &:after {
    display: block;
    content: "";
    clear: both;
  }

  h1 {
    margin: 0.67em 0;
    font-size: 32px;
  }

  time {
    margin: 1em 0;
    font-size: 14px;
  }
  /* .cardpage {
    padding: 0;
  } */
`;

export default PostsWrapper;
