import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 50%;
  border: none;
  width: 45px;
  height: 45px;
  margin: 5px;
  background-color: #141414;
  transition: all 0.5s ease-in-out;
  border: 2px solid white;
  box-shadow: 0 0 5px gray;
  .link-inner {
    color: white;
    width: 30px;
    height: 30px;
  }
  &:hover {
    box-shadow: 0 0 10px white;
  }
`;
