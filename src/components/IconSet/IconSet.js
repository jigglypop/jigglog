import React, { useCallback, useEffect, useRef } from "react";

import styled from "styled-components";
import facebook from "./facebook.png";
import instargram from "./instargram.png";
import github from "./github.png";
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
  width: 50px;
  height: 50px;
`;

const IconSet = () => {
  return (
    <Grid container>
      <Grid item xs={1}>
        <LogoImage src={htmllogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={csslogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={javascriptlogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={awslogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={cpluslogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={clogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={pythonlogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={javalogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={dartlogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={mysqllogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={djangologo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={nodejslogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={flasklogo} />
      </Grid>

      <Grid item xs={1}>
        <LogoImage src={springlogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={vuelogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={reactlogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={reduxlogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={gatsbylogo} />
      </Grid>
      <Grid item xs={1}>
        <LogoImage src={tensorflowlogo} />
      </Grid>
    </Grid>
  );
};

export default IconSet;
