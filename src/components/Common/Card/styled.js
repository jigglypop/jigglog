import styled from "styled-components";

export const TagWrapper = styled.div`
  font-weight: 800;
`;

export const StyledCard = styled.div`
  .grid {
    margin-left: -5%;
  }
  @media (max-width: 1000px) {
    .grid {
      margin-left: 0;
    }
  }
`;

export const DivWrapper = styled.div`
  display: block;
  width: 100%;
  hr {
    margin: 10px;
  }
`;

export const Picture = styled.img`
  width: 70%;
  object-fit: cover;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 5%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Content = styled.div`
  margin: 10px;
  height: 200px;
  div {
    display: inline-block;
    vertical-align: middle;
  }
  h1.title {
    margin-bottom: 20px;
    line-height: 1.5em;
    font-size: 20px;
    font-weight: 800;
  }
  h1.summary {
    margin-bottom: 20px;
    line-height: 1.5em;
    font-size: 13px;
    font-weight: 800;
  }
  h1.date {
    color: #66d9ef;
    line-height: 1.5em;
    font-size: 10px;
    font-weight: 800;
  }
  @media (max-width: 1000px) {
    h1.title {
      line-height: 1.5em;
      font-size: 15px;
      font-weight: 800;
    }
    h1.summary {
      line-height: 1.5em;
      font-size: 10px;
      font-weight: 800;
    }
    h1.date {
      color: #66d9ef;
      line-height: 1.5em;
      font-size: 8px;
      font-weight: 800;
    }
  }
`;

export const TagItem = styled.div`
  background: linear-gradient(45deg, #8a2387, #e94057, #f64f59) !important;
  margin: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 2px;
  padding-top: 2px;
  border-radius: 10px;
  margin-top: 30px;

  h1.tagitem {
    font-size: 10px;
  }
  @media (max-width: 1000px) {
    h1.tagitem {
      font-size: 6px;
    }
  }
`;
