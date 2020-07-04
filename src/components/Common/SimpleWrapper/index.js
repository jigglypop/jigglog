import styled from "styled-components";

const SimpleWrapper = styled.div`
  margin: auto;
  padding: 120px 0 0;
  max-width: 1200px;
  font-size: 16px;
  background-image: white;
  @media (max-width: 614px) {
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

export default SimpleWrapper;
