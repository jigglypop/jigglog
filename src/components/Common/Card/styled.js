import styled from "styled-components";

export const TagWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 800;
`;

export const StyledArticle = styled.div`
  padding: 0 16px 16px;
  font-size: 30px;
  font-weight: 800;

  vertical-align: top;

  a {
    color: ${({ theme: { color } }) => color};

    h3 {
      font-size: 20px;
      font-weight: 700;
    }

    p {
      padding: 24px 0 16px;
      font-size: 16px;

      span {
        white-space: nowrap;
      }
    }

    small {
      margin: 0 0 0 4px;
      font-size: 14px;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    a {
      color: ${({ theme: { color } }) => color};

      h3 {
        font-size: 13px;
        font-weight: 700;
      }

      p {
        padding: 24px 0 16px;
        font-size: 10px;

        span {
          white-space: nowrap;
        }
      }

      small {
        margin: 0 0 0 4px;
        font-size: 10px;
      }
    }
  }
`;
