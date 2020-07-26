import styled from "styled-components";

const CategoryItem = styled.div`
  background: linear-gradient(45deg, #4776e6, #8e54e9);
  margin: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 3px;
  padding-top: 3px;

  border-radius: 10px;
  h1 {
    font-size: 10px;
    font-weight: 800;
  }
  @media (max-width: 1000px) {
    margin: 2px;
    padding-left: 4px;
    padding-right: 4px;
    padding-bottom: 2px;
    padding-top: 2px;
    h1 {
      font-size: 8px;
      font-weight: 800;
    }
  }
`;

export default CategoryItem;
