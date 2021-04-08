import styled from "styled-components";

export const BioWrapper = styled.div`
  .divider {
    margin-top: 50px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    height: 3px;
    background-color: gray;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .biotext {
    color: black;
    font-size: 13px;
    margin-top: 10px;
    font-weight: 800;
  }
  .myname {
    color: black;
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
`


export const CircleWrapper = styled.div`
  margin: 10px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  text-align: center;
  border: 1.5px solid #ebebeb;
  svg {
    width: 20px;
    height: 20px;
  }
`;
