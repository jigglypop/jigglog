import React from "react";
import {
  AUTHOR,
  DESCRIPTION,
  SITE_URL,
  PROFILE,
  MYNAME,
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

const CircleWrapper = styled.div`
  margin: 10px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  text-align: center;
  border: 1.5px solid #ebebeb;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Bio = ({ color }) => (
  <div>
    <Grid container>
      <Grid item xs={6}>
        <Link to={"/resume"}>
          <img
            src={github}
            style={{
              marginTop: "100px",
              width: "50px",
              height: "50px",
            }}
          />
        </Link>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          marginTop: "100px",
          marginLeft: "-3vw",
        }}
      >
        <p
          style={{
            color: color,
            fontSize: "13px",
            marginTop: "10px",
            textShadow: "2px 2px 20px white",
            fontWeight: 800,
          }}
        >
          {AUTHOR}
        </p>
        <p
          style={{
            color: color,
            fontSize: "12px",
            marginTop: "10px",
            textShadow: "2px 2px 20px white",
            fontWeight: 800,
          }}
        >
          {MYNAME}
        </p>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          marginTop: "10px",
          marginLeft: "-10px",
        }}
      >
        <p
          style={{
            color: color,
            fontSize: "10px",
            fontWeight: 800,
          }}
        >
          {DESCRIPTION}
        </p>
      </Grid>
      <Grid item xs={4}>
        {GITHUB_ID ? (
          <a
            href={`https://github.com/${GITHUB_ID}`}
            target="_blank"
            rel="noreferrer noopener"
            style={{ margin: 0, padding: 0 }}
          >
            <CircleWrapper>
              <svg viewBox="0 0 26 28" style={{ margin: 0, padding: 0 }}>
                <path d="M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z" />
              </svg>
            </CircleWrapper>
            {/* <img src={github} style={{ width: "30px", height: "30px" }} /> */}
          </a>
        ) : null}
      </Grid>
      <Grid item xs={4}>
        {FACEBOOK_ID ? (
          <a
            href={`https://www.facebook.com/${FACEBOOK_ID}`}
            target="_blank"
            rel="noreferrer noopener"
            style={{ margin: 0, padding: 0 }}
          >
            <CircleWrapper>
              <svg viewBox="0 0 16 28" style={{ margin: 0, padding: 0 }}>
                <path d="M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z" />
              </svg>
            </CircleWrapper>
            {/* <img src={facebook} style={{ width: "30px", height: "30px" }} /> */}
          </a>
        ) : null}
      </Grid>
      <Grid item xs={4}>
        {INSTARGRAM_ID ? (
          <a
            href={`https://www.instargram.com/${INSTARGRAM_ID}`}
            target="_blank"
            rel="noreferrer noopener"
            style={{ margin: 0, padding: 0 }}
          >
            <CircleWrapper>
              <svg viewBox="0 0 24 24" style={{ margin: 0, padding: 0 }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </CircleWrapper>

            {/* <img src={instargram} style={{ width: "30px", height: "30px" }} /> */}
          </a>
        ) : null}
      </Grid>
    </Grid>
  </div>
);

export default Bio;
