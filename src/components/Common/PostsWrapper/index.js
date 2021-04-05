import styled from "styled-components";

const PostsWrapper = styled.div`
  margin: auto;
  padding-top: 10vw;
  padding-bottom: 10vw;
  padding-left: 3vw;
  padding-right: 3vw;
  max-width: 100%;
  font-size: 0;

  @media (max-width: 1000px) {
    padding: 3%;
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
`;

export default PostsWrapper;
