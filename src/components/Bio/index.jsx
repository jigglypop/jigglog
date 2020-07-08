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
  position: relative;
  -webkit-filter: grayscale(100%);
  filter: gray;
`;
const Wrapper = styled.div`
  margin-top: 20px;
  button {
    float: right;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const Bio = ({ color }) => (
  <Wrapper>
    <Grid container>
      <Grid item xs={12}>
        <Link to={"/resume"}>
          <img
            src={github}
            style={{
              marginTop: "100px",
              width: "120px",
              height: "120px",
            }}
          />
        </Link>
      </Grid>
      <Grid item xs={12}>
        <p
          style={{
            color: color,
            margin: "10px",
            fontSize: "20px",
            textShadow: "2px 2px 20px white",
            fontWeight: 800,
          }}
        >
          {AUTHOR}
        </p>
      </Grid>
      <Grid item xs={12}>
        <p
          style={{
            color: color,
            fontSize: "10px",
            margin: "10px",
            fontWeight: 800,
          }}
        >
          {DESCRIPTION}
        </p>
      </Grid>

      <Grid item xs={12}>
        <SocialInformation>
          {GITHUB_ID ? (
            <a
              href={`https://github.com/${GITHUB_ID}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={github} style={{ width: "30px", height: "30px" }} />
            </a>
          ) : null}
          {FACEBOOK_ID ? (
            <a
              href={`https://www.facebook.com/${FACEBOOK_ID}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={facebook} style={{ width: "30px", height: "30px" }} />
            </a>
          ) : null}
          {INSTARGRAM_ID ? (
            <a
              href={`https://www.instargram.com/${INSTARGRAM_ID}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={instargram} style={{ width: "30px", height: "30px" }} />
            </a>
          ) : null}
        </SocialInformation>
      </Grid>
    </Grid>
  </Wrapper>
);

export default Bio;
