import styled from "styled-components";

const PostWrapper = styled.section`
  margin: auto;
  padding: 120px 0 0;
  max-width: 1000px;
  font-size: 16px;
  background-color: white;
  padding: 50px;
  @media (max-width: 414px) {
    padding: 70px 16px 0;
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
`;

export default PostWrapper;
