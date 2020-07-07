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
    max-width: 1000px;
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

const ClearMobile = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

const SocialInformation = styled.section`
  font-size: 20px;
  text-align: center;

  a {
    padding: 0 6px;
  }
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
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;
const NameSmallTitle = styled.div`
  font-family: "NanumBarunGothic" !important;
  margin-top: 20px;
  font-size: 30px;
  text-shadow: 3px 3px 30px white;
  @media (max-width: 600px) {
    font-size: 20px;
  }
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

  @media (max-width: 600px) {
    padding: 0 10px 10px 10px;
    line-height: 2em;
    color: white;
    h1 {
      margin-top: 4px;
      margin-bottom: 2px;

      font-size: 22px;
      font-weight: 800;
    }
    h2 {
      margin-top: 2px;
      font-size: 20px;
      font-weight: 800;
    }
    h3 {
      margin-top: 4px;
      font-size: 18px;
      font-weight: 800;
    }
    h4 {
      margin-top: 4px;
      font-weight: 800;
      font-size: 16px;
    }
    h5 {
      margin-top: 4px;
      font-size: 14px;
      font-weight: 800;
    }

    p {
      margin-top: 2px;
      font-size: 12px;
      font-weight: 100;
    }
    li {
      margin-top: 2px;
      font-size: 12px;
      margin-left: 30px;
      font-weight: 100;
    }
    blockquote {
      line-height: 1.2em;
      color: #aaa;
      font-size: 12px;
    }
    pre {
      font-size: 12px;
    }
    table {
      margin: 2px;
      background: #434343;
    }
    th {
      border: 2px solid white;
      color: white;
      padding: 2px;
      font-size: 10px;
    }
    tr {
      border: 2px solid white;
      color: white;
      padding: 2px;
      font-size: 10px;
    }
    td {
      border: 2px solid white;
      color: white;
      padding: 2px;
      font-size: 10px;
    }
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
  const IconObject = [
    "htmllogo",
    "cpluslogo",
    "awslogo",
    "jquerylogo",
    "mysqllogo",
    "pythonlogo",
    "reactlogo",
    "springlogo",
    "tensorflowlogo",
    "djangologo",
    "flasklogo",
    "dartlogo",
    "clogo",
    "nodejslogo",
    "vuelogo",
    "javalogo",
    "javascriptlogo",
    "reduxlogo",
    "gatsbylogo",
    "csslogo",
  ];
  return (
    <Wrapper>
      <Clearfix>
        <Helmet>
          <title>{`${PREFIX}RESUME`}</title>
          <meta name="og:title" content={`${PREFIX}RESUME`} />
        </Helmet>
        <ClearMobile>
          <Clearfix>
            <Button type="button" onClick={printPage}>
              <FaPrint />
              <PrintTitle>PRINT</PrintTitle>
            </Button>
          </Clearfix>
        </ClearMobile>
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <IconSet IconObject={IconObject} />
        </div>

        <PostContent>
          <div ref={$mdWrapper} dangerouslySetInnerHTML={{ __html: html }} />
        </PostContent>
      </Clearfix>
    </Wrapper>
  );
};

Resume.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default Resume;
