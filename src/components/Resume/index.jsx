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
// import facebook from "./icons/facebook.png";
// import instargram from "./icons/instargram.png";
// import github from "./icons/github.png";
// import Grid from "@material-ui/core/Grid";

// import cpluslogo from "./icons/cplus.png";
// import awslogo from "./icons/aws.png";
// import htmlcssjs from "./icons/htmlcssjs.png";
// import jquerylogo from "./icons/jquery.png";
// import mysqllogo from "./icons/mysql.png";
// import pythonlogo from "./icons/python.png";
// import reactlogo from "./icons/react.png";
// import springlogo from "./icons/spring.png";
// import tensorflowlogo from "./icons/tensorflow.png";
// import djangologo from "./icons/django.png";
// import flasklogo from "./icons/flask.png";
// import dartlogo from "./icons/dart.png";
// import clogo from "./icons/c.png";
// import nodejslogo from "./icons/nodejs.png";
// import vuelogo from "./icons/vue.png";
// import javalogo from "./icons/java.png";
import facebook from "./facebook.png";
import instargram from "./instargram.png";
import github from "./github.png";
import Grid from "@material-ui/core/Grid";

import cpluslogo from "./cplus.png";
import awslogo from "./aws.png";
import htmlcssjs from "./htmlcssjs.png";
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

        <Grid container>
          <Grid item xs={3}>
            <HtmlCssJsImage src={htmlcssjs} />
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
            <LogoImage src={tensorflowlogo} />
          </Grid>
        </Grid>
      </Clearfix>
    </Wrapper>
  );
};

Resume.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default Resume;
