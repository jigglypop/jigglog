import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(90deg, #5c258d, #4389a2) !important;

  /* @font-face {
    font-family: "NanumBarunGothic";
    src: url("../../fonts/NanumBarunGothic.ttf");
  }
  font-family: "NanumBarunGothic" !important; */

  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};

  @media print {
    & > nav,
    & > footer {
      display: none;
    }

    & > main {
      & > section {
        padding: 0;
      }
    }

    button {
      display: none;
    }
  }
`;
