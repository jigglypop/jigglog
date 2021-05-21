import React from "react";
import {
  AUTHOR,
  DESCRIPTION,
  MYNAME,
  GITHUB_ID,
  INSTARGRAM_ID,
  FACEBOOK_ID,
} from "../../constants";
import Grid from "@material-ui/core/Grid";
import { Link } from "gatsby";
import { 
  CircleWrapper,
  BioWrapper
} from './styled'
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import BorderSide from "../Common/borderside/BorderSide";

const Bio = () => (
  <BioWrapper>
    <div className="top">
      <Link to={"/resume"}>
        <BorderSide width="60px" height="60px"/>
      </Link>
    </div>
    <div className="mid">
      <p className="biotext">
        {AUTHOR}
      </p>
      <p className="biotext">
        {MYNAME}
      </p>
    </div>
    <div className="bottom">
      {GITHUB_ID ? (
          <a
            href={`https://github.com/${GITHUB_ID}`}
            target="_blank"
            rel="noreferrer noopener"
            className="circle"
          >
            <CircleWrapper>
              <AiFillGithub className="link-inner"/>
            </CircleWrapper>
          </a>
        ) : null}
          {FACEBOOK_ID ? (
          <a
            href={`https://www.facebook.com/${FACEBOOK_ID}`}
            target="_blank"
            rel="noreferrer noopener"
            className="circle"
          >
            <CircleWrapper>
              <FaFacebook className="link-inner"/>
            </CircleWrapper>
          </a>
        ) : null}
        {INSTARGRAM_ID ? (
          <a
            href={`https://www.instargram.com/${INSTARGRAM_ID}`}
            target="_blank"
            rel="noreferrer noopener"
            className="circle"
          >
            <CircleWrapper>
              <AiFillInstagram className="link-inner"/>
            </CircleWrapper>
          </a>
        ) : null}
    </div>

  </BioWrapper>
);

export default Bio;
