import React from "react";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const LogoItem = styled.div`
  color: white;
  text-shadow: 2px 2px 20px white;
  font-weight: 800;

  font-size: 15px;
  margin: 5px;
  animation: blink ${(props) => props.second}s ease-in-out infinite alternate;
  @media (max-width: 600px) {
    font-size: 10px;
  }

  @keyframes blink {
    30% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;

const IconSetUnder = ({ IconObject }) => {
  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {IconObject.map((item, index) => (
        <LogoItem
          second={Math.floor(Math.random() * (2 - 0.5 + 0.1)) + 0.5}
          key={index}
        >
          #{item.replace("logo", "").toUpperCase()}
        </LogoItem>
      ))}
    </Grid>
  );
};
export default IconSetUnder;
