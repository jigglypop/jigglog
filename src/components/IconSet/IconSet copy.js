import React from "react";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import cpluslogo from "./cplus.png";
import awslogo from "./aws.png";
import jquerylogo from "./jquery.png";
import mysqllogo from "./mysql.png";
import pythonlogo from "./python.png";
import reactlogo from "./react.png";
import springlogo from "./spring.png";
import tensorflowlogo from "./tensorflow.png";
import djangologo from "./django.png";
import flasklogo from "./flask.png";
import dartlogo from "./dart.png";
import clogo from "./c.png";
import nodejslogo from "./nodejs.png";
import vuelogo from "./vue.png";
import javalogo from "./java.png";
import javascriptlogo from "./javascripts.png";
import reduxlogo from "./redux.png";
import gatsbylogo from "./gatsby.png";

import htmllogo from "./html.png";
import csslogo from "./css.png";

const LogoImage = styled.img`
  -webkit-filter: grayscale(100%);
  filter: gray;
  width: 30px;
  height: 30px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const LogoItem = styled.div`
  /* color: rgb(
    ${(props) => props.A},
    ${(props) => props.B},
    ${(props) => props.C}
  );
  text-shadow: 2px 2px 20px
    rgb(${(props) => props.A}, ${(props) => props.B}, ${(props) => props.C}); */
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

// const IconSet = ({ IconObject }) => {
//   return (
//     <Grid
//       container
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         width: "40%",
//       }}
//     >
//       {IconObject.indexOf("htmllogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={htmllogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("csslogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={csslogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("javascriptlogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={javascriptlogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("awslogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={awslogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("cpluslogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={cpluslogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("clogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={clogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("pythonlogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={pythonlogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("javalogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={javalogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("dartlogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={dartlogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("mysqllogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={mysqllogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("djangologo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={djangologo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("nodejslogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={nodejslogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("flasklogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={flasklogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("springlogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={springlogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("vuelogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={vuelogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("reactlogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={reactlogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("reduxlogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={reduxlogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("gatsbylogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={gatsbylogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("tensorflowlogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={tensorflowlogo} />
//         </Grid>
//       )}
//       {IconObject.indexOf("jquerylogo") !== -1 && (
//         <Grid item xs={1}>
//           <LogoImage src={jquerylogo} />
//         </Grid>
//       )}
//     </Grid>
//   );
// };

const IconSet = ({ IconObject }) => {
  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        width: "40%",
      }}
    >
      {IconObject.map((item, index) => (
        <LogoItem second={Math.floor(Math.random() * (2 - 0.5 + 0.1)) + 0.5}>
          #{item.replace("logo", "").toUpperCase()}
        </LogoItem>
      ))}
    </Grid>
  );
};

export default IconSet;