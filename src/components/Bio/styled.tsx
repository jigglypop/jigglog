import styled from "styled-components";

export const BioWrapper = styled.div`
  background-color: #141414;
  border-radius : 10px;
  margin: 10px;
  padding: 10px;
  color: white;
  transition: all 0.5s ease-in;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  .top{
    grid-row: 1/2;
  }
  .mid {
    grid-row: 2/3;
  }
  .bottom {
    grid-row: 3/4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .biotext {
    font-size: 13px;
    margin-top: 10px;
    font-weight: 800;
  }
  .myname {
    font-size: 13px;
    margin-top: 10px;
    font-weight: 800;
  }
  .gridgap {
    margin-top: 10px;
  }
  .circle {
    margin: 0;
    padding: 0;
  }
  @media (max-width: 1200px) {
    .bottom {
      display: none;
    }
  }
`


export const CircleWrapper = styled.div`
  border-radius: 50%;
  border: none;
  width: 45px;
  height: 45px;
  margin: 10px;
  background-color:#141414;
  transition: all 0.5s ease-in-out;
  border: 2px solid white;
  box-shadow : 0 0 10px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 2px solid #FF416C;
    .link-inner {
      color: #FF416C;
    }
  }

  .link-inner{
    transition: all 0.5s ease-in-out;
    color: white;
    width: 30px;
    height: 30px;
  }
  
`;
