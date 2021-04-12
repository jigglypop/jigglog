import styled from "styled-components";

export const TagButton = styled.div`
  transition: all 0.2s ease-in-out;
  transition: 0.5s;
  background-color: transparent;
  h4 {
    font-size: 14px;
    font-weight: 800;
    padding: 10px;
    color:  #FF416C;
  }
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export const ListImage = styled.div`
  grid-row: 1/2;
  background-image: url("/back.jpg");
  background-size: cover;
`;

export const ListTitle = styled.div`
  grid-row: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
  h3 {
    font-size: 32px;
    font-weight: 800;
    color: white;
  }
`;

export const ListCategory = styled.div`
  grid-row: 3/4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: black;
  overflow: scroll;
  h3 {
    font-size: 28px;
    font-weight: 800;
    color: white;
  }
  /* padding: 5%; */
`;

export const ListContent = styled.div`
  grid-row: 4/5;
`;

export const ListPage = styled.div`
  grid-row: 5/6;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;



export const LargeWrapper = styled.div`
  width: 100%;
  background: rgb(31, 31, 36);
  box-shadow: 6px 6px 8px black;
  .pagination {
    margin-top: 5%;
    margin-left: 45%;
  }
  padding-bottom: 1%;
`;

export const ListWrapper = styled.div`
    display: grid;
    grid-template-rows: 200px 100px 100px 1fr 200px;
`;


export const ClipText = styled.div`
  background-size: cover;
  position: relative;
  height: 100%;

  h1 {
    background-color: black;
    color: white;
    font-size: 10vw;
    font-weight: 800;
    margin: 0 auto;
    padding: 10px;
    width: 95%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: multiply;
    opacity: 0.8;
  }
`;
