import styled from "styled-components";

const OuterButton = styled.button`
  transition: all 0.2s ease-in-out;
  transition: 0.5s;
  border: ${(props) => (props.borderSize ? props.borderSize : "2px")} solid
    ${(props) => (props.borderColor ? props.borderColor : "#FF416C")};
  background-color: transparent;
  height: ${(props) => (props.height ? props.height : "40px")};
  min-width: 150px;
  margin: 5px;
  h4 {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "12px")};
    padding: 10px;
    color: ${(props) => (props.borderColor ? props.borderColor : "#FF416C")};
  }
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.borderColor ? props.borderColor : "#FF416C"};
    transform: scale(1.1);
    h4 {
      color: black;
    }
  }
`;
export default OuterButton;
