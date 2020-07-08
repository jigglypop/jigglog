import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(45deg, #c31432, #240b36) !important;

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
