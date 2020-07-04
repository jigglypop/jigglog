import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { FaPrint } from "react-icons/fa";
import Clearfix from "~/components/Common/Clearfix";
import {
  PREFIX,
  AUTHOR,
  EMAIL,
  GITHUB_ID,
  INSTARGRAM_ID,
  FACEBOOK_ID,
} from "~/constants";
import * as profileUrl from "~/resources/me.png";
import styled from "styled-components";

import facebook from "./facebook.png";
import instargram from "./instargram.png";
import github from "./github.png";

import IconSet from "../IconSet/IconSet";

const Wrapper = styled.section`
  padding: 100px 0 0;
  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  & > ${Clearfix} {
    margin: auto;
    max-width: 640px;
  }

  button {
    float: right;
  }
`;

const BasicInformation = styled.section`
  text-align: center;
  font-size: 16px;

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  p {
    margin: 0.67em 0;
  }

  img {
    border-radius: 50%;
  }
`;

const SocialInformation = styled.section`
  font-size: 20px;
  text-align: center;

  a {
    padding: 0 6px;
  }
`;

const LogoImage = styled.img`
  -webkit-filter: grayscale(100%);
  filter: gray;
  width: 50px;
  height: 50px;
`;

const HtmlCssJsImage = styled.img`
  -webkit-filter: grayscale(100%);
  filter: gray;
  width: 150px;
  height: 50px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  border: 1px solid ${({ theme: { color } }) => color};
  border-radius: 4px;
  outline: 0;
`;
const NameTitle = styled.div`
  font-family: "NanumBarunGothic" !important;
  font-size: 50px;
  text-shadow: 3px 3px 30px white;
`;
const NameSmallTitle = styled.div`
  font-family: "NanumBarunGothic" !important;
  margin-top: 10px;

  font-size: 30px;
  text-shadow: 3px 3px 30px white;
`;
const PrintTitle = styled.div`
  font-family: "NanumBarunGothic" !important;
  font-size: 15px;
  font-weight: 800;

  margin: 5px;
  text-shadow: 3px 3px 30px white;
`;
const PostContent = styled.section`
  font-family: "NanumBarunGothic" !important;
  padding: 1em 1em 4em;
  line-height: 2em;
  font-weight: 800;

  h1 {
    margin-top: 40px;
    font-size: 50px;
    font-weight: 800;
    text-shadow: 3px 3px 30px white;
  }
  h2 {
    margin-top: 20px;
    font-size: 28px;
    font-weight: 800;

    text-shadow: 3px 3px 30px white;
  }
  h3 {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 800;

    text-shadow: 3px 3px 30px white;
  }
  h4 {
    margin-top: 20px;
    font-size: 21px;
    font-weight: 800;

    text-shadow: 3px 3px 30px white;
  }
  h5 {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 800;

    text-shadow: 3px 3px 30px white;
  }
  p {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 800;
  }
`;

const Resume = ({
  data: {
    resume: { html },
  },
}) => {
  const $mdWrapper = useRef(null);

  useEffect(() => {
    const anchors = [...new Set($mdWrapper.current.getElementsByTagName("a"))];

    anchors.forEach((anchor) => {
      const href = anchor.getAttribute("href");

      if (href.startsWith("http")) {
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("rel", "noreferrer noopener");
      }
    });
  }, []);

  const printPage = useCallback(() => {
    global.print();
  }, []);

  return (
    <Wrapper>
      <Clearfix>
        <Helmet>
          <title>{`${PREFIX}RESUME`}</title>
          <meta name="og:title" content={`${PREFIX}RESUME`} />
        </Helmet>

        <Clearfix>
          <Button type="button" onClick={printPage}>
            <FaPrint />
            <PrintTitle>PRINT</PrintTitle>
          </Button>
        </Clearfix>

        <BasicInformation>
          <img src={profileUrl.default} alt="" width="120" height="120" />
          <NameTitle>{AUTHOR}</NameTitle>
          <NameSmallTitle>염동환</NameSmallTitle>

          <p>{EMAIL}</p>
        </BasicInformation>
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

        <PostContent>
          <div ref={$mdWrapper} dangerouslySetInnerHTML={{ __html: html }} />
        </PostContent>

        <IconSet />
      </Clearfix>
    </Wrapper>
  );
};

Resume.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default Resume;
