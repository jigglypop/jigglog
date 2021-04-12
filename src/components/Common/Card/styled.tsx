import styled from "styled-components";

export const TagWrapper = styled.div`
  font-weight: 800;
`;

export const StyledCard = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    .grid {
      margin-left: 0;
    }
  }
`;

export const DivWrapper = styled.div`
  width: 100%;
  hr {
    margin: 10px;
  }
`;

export const Left = styled.div`
  grid-column: 1/2;
  @media (max-width: 1000px) {
    display: none;
  }
`

export const Right = styled.div`
  grid-column: 2/3;
  @media (max-width: 1000px) {
    grid-column: 1/3;
  }
`

export const Picture = styled.img`
  width: 80%;
  object-fit: cover;
  margin-top: 15%;
  margin-bottom: 5%;
  margin-left: 5%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;


export const CommentCountButton = styled.div`
  transition: all 0.2s ease-in-out;
  transition: 0.5s;
  border: 2px solid#FF416C;
  background-color: transparent;
  display: flex;
  justify-content: center;
  text-align: center;
  h4 {
    padding: 5px;
    font-size: 12px;
    font-weight: 800;
    color: #FF416C
  }
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;


// 내부 그리드

export const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr 25px;
`
export const GridOne = styled.div`
  grid-row: 1/2;
`
export const GridTwo = styled.div`
  grid-row: 2/3;
`
export const GridThree = styled.div`
  grid-row: 3/4;
  display: flex;
  justify-content: space-between;
  padding: 0 20% 0 0;
  .count{
    color: #e94057;
    line-height: 1.5em;
    font-size: 16px;
    font-weight: 800;
  }
`

export const Content = styled.div`
  margin: 10px;
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 200px 1fr;
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
