import React from "react";
import {
  AUTHOR,
  DESCRIPTION,
  SITE_URL,
  PROFILE,
  EMAIL,
  GITHUB_ID,
  INSTARGRAM_ID,
  FACEBOOK_ID,
} from "~/constants";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import styled from "styled-components";

import facebook from "./facebook.png";
import instargram from "./instargram.png";
import github from "./github.png";
import { Link } from "gatsby";

const SocialInformation = styled.div`
  color: "black";
  position: absolute;
  margin-top: -1.5%;
  margin-left: 5%;
  -webkit-filter: grayscale(100%);
  filter: gray;
`;
const Wrapper = styled.div`
  margin-top: 20px;
  button {
    float: right;
  }
`;

const Bio = ({ color }) => (
  <Wrapper>
    <Grid container>
      <Grid>
        <Link to={"/resume"}>
          <Avatar src={PROFILE} style={{ width: "60px", height: "60px" }} />
        </Link>
      </Grid>
      <Grid
        style={{
          color: color,
          fontSize: "16px",
          marginTop: "-3px",
          marginLeft: "10px",
          fontWeight: 800,
        }}
      >
        {AUTHOR}
        <SocialInformation>
          {GITHUB_ID ? (
            <a
              href={`https://github.com/${GITHUB_ID}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={github} style={{ width: "20px", height: "20px" }} />
            </a>
          ) : null}
          {FACEBOOK_ID ? (
            <a
              href={`https://www.facebook.com/${FACEBOOK_ID}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={facebook} style={{ width: "20px", height: "20px" }} />
            </a>
          ) : null}
          {INSTARGRAM_ID ? (
            <a
              href={`https://www.instargram.com/${INSTARGRAM_ID}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={instargram} style={{ width: "20px", height: "20px" }} />
            </a>
          ) : null}
        </SocialInformation>
        <p
          style={{
            color: color,
            fontSize: "13px",
            marginTop: "-3px",
            marginLeft: "-2px",
            fontWeight: 800,
          }}
        >
          {DESCRIPTION}
        </p>
      </Grid>
    </Grid>
  </Wrapper>
);

export default Bio;
