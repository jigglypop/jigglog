import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Article = styled.div`
  vertical-align: top;

  h6 {
    font-size: 10px;
    font-weight: 800;
    color: black;
    text-shadow: 2px 2px 20px white;
  }
`;

export interface ISmallCard {
  path: string
  title: string
}

const SmallCard = ({ path, title } : ISmallCard) => {
  return (
    <Article>
      <Link to={path}>
        <h6>{title}</h6>
      </Link>
      <hr style={{ color: "black" }} />
    </Article>
  );
};
export default SmallCard;
