import styled from 'styled-components';

export const TagButton = styled.div`
  transition: all 0.2s ease-in-out;
  background-color: transparent;
  h4 {
    font-size: 14px;
    font-weight: 800;
    padding: 10px;
    color: rgba(0, 207, 255);
  }
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export const ListImage = styled.div`
  grid-row: 1/2;
  background-color: rgba(0, 207, 255);
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
  .categoryname {
    color: rgba(0, 207, 255);
    text-shadow: 0 0 10px rgba(0, 207, 255);
  }

  @media (max-width: 1200px) {
    .categorytagtitle {
      font-size: 28px;
    }
  }
  @media (max-width: 600px) {
    grid-row: 2/4;
    .categorytagtitle {
      font-size: 24px;
    }
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
  @media (max-width: 600px) {
    display: none;
  }
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
  grid-template-rows: 250px 100px 100px 1fr 200px;
`;

export const ClipText = styled.div`
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
  h1 {
    position: relative;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 40px;
    font-weight: 800;
    margin: 0 auto;
    width: 99%;
    height: 95%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: multiply;
  }
`;

export const Pagination = styled.div`
  button {
    color: white;

    &.Mui-selected {
      background: #66d9ef;
      color: black;
    }
  }
`;
export const PostsWrapper = styled.div`
  margin: auto;
  padding-top: 10vw;
  padding-bottom: 10vw;
  padding-left: 3vw;
  padding-right: 3vw;
  max-width: 100%;
  font-size: 0;

  @media (max-width: 1000px) {
    padding: 3%;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }

  h1 {
    margin: 0.67em 0;
    font-size: 32px;
  }

  time {
    margin: 1em 0;
    font-size: 14px;
  }
`;
