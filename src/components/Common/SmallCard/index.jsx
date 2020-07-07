import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Truncate from "react-truncate";
import { FaTags } from "react-icons/fa";
import formattedDate from "~/utils/formattedDate";
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

const SmallCard = ({ path, title }) => {
  return (
    <Article>
      <Link to={path}>
        <h6>{title}</h6>
      </Link>
      <hr style={{ color: "black" }} />
    </Article>
  );
};

SmallCard.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  path: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  date: PropTypes.string,
  summary: PropTypes.string,
};

SmallCard.defaultProps = {
  tags: [],
  images: [],
  title: "",
  date: "",
  summary: "",
};

export default SmallCard;
