import React from "react";
import {
  GITHUB_ID,
  INSTARGRAM_ID,
  FACEBOOK_ID,
} from "../../constants";
import { 
  BottomDiv,
  CircleWrapper,
} from './styled'
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const CircleIcon = () => (
    <BottomDiv className="bottom">
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
    </BottomDiv>
);

export default CircleIcon;
