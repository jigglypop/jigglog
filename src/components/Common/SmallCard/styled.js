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
  @media (max-width: 414px) {
    margin: 0 0 16px;
    padding: 0 0 16px;
    width: 100%;
    border-bottom: 1px solid #eee;
  }
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
`;
