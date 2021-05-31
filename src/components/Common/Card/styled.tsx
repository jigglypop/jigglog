import styled from "styled-components";

export const TagWrapper = styled.div`
  font-weight: 800;
  display: flex;
  flex-direction: row;
  
  .tagitem{
    color: rgba(0,207,255);
    font-size: 14px;
    font-weight: 800;
    margin: 5px;
    transition: all .2s ease-in-out;
    text-shadow: 0 0 10px rgba(0,207,255);
    &:hover{
      transform: scale(1.2);
    }    
  }
  
  @media (max-width: 1000px) {
    display: none;
  }
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
  transition: all 0.2s ease-in;
  &:hover{
    background-color: rgba(0,0,0, 0.5);
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
  background-color: transparent;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  h4 {
    padding: 5px;
    font-size: 12px;
    font-weight: 800;
    color: rgba(0,207,255)
  }
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  .textouter{
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .countwhite{
    color: white;
    font-size: 30px;
    font-weight: 800;
  }
  .countwhitetext{
    color: white;
    font-size: 15px;
    font-weight: 800;
  }
  .count{
    color: #e94057;
    font-size: 30px;
    font-weight: 800;
  }
  .counttext{
    color: #e94057;
    font-size: 15px;
    font-weight: 800;
  }
`;


// 내부 그리드

export const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr 16px;
`
export const GridOne = styled.div`
  grid-row: 1/2;
  @media (max-width: 1000px) {
    grid-row: 1/3;
  }
`
export const GridTwo = styled.div`
  grid-row: 2/3;
  display: flex;
  text-align: center;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`
export const GridThree = styled.div`
  grid-row: 3/4;
  display: flex;
  justify-content: space-between;
  padding: 0 5% 0 0;

`

export const Content = styled.div`
  margin: 10px;
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 200px 1fr;
  h1.title {
    margin: 20px 0;
    line-height: 1.5em;
    font-size: 24px;
    font-weight: 800;
    transition: all .3s ease-in;
    text-shadow: 0 0 10px white;

  }
  h1.summary {
    margin:20px 0;
    line-height: 1.5em;
    font-size: 16px;
    font-weight: 800;
  }
  h1.date {
    color: rgba(0,207,255);
    line-height: 1.5em;
    font-size: 13px;
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
      color: rgba(0,207,255);
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
