import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { PREFIX } from "~/constants";
import styled from "styled-components";
import SimpleWrapper from "~/components/Common/SimpleWrapper";
import { PRIMARY_COLOR } from "~/components/Common/constants";

export const Wrapper = styled(SimpleWrapper)`
  /* padding: 100px 0 0; */
  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  &:before,
  &:after {
    display: block;
    content: "";
    clear: both;
  }
`;

const Title = styled.div`
  font-family: "NanumBarunGothic" !important;
  animation: blink 1.2s ease-in-out infinite alternate;
  text-align: center;
  font-size: 60px;
  font-weight: 800;
  text-shadow: 2px 2px 20px white;
  @keyframes blink {
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const GoSite = styled.div`
  font-family: "NanumBarunGothic" !important;
  text-align: center;
  color: #ed213a;
  margin-top: 10px;

  margin-bottom: 40px;
  font-size: 30px;
  font-weight: 800;
  text-shadow: 2px 2px 20px #ed213a;
`;
export const PortfolioDescription = styled.section`
  float: left;
  padding: 0 0 0 36px;
  width: 50%;
  font-family: "NanumBarunGothic" !important;

  @media (max-width: 414px) {
    float: none;
    margin: 0 0 16px;
    padding: 0 0 16px;
    width: 100%;
  }

  h1 {
    margin-top: 40px;
    font-size: 50px;
    font-weight: 800;
    text-shadow: 2px 2px 20px white;
  }
  h2 {
    margin-top: 40px;
    font-size: 28px;
    font-weight: 800;
    text-shadow: 2px 2px 20px white;
  }
  h3 {
    margin-top: 40px;
    font-size: 24px;
    font-weight: 800;
    text-shadow: 2px 2px 20px white;
  }
  h4 {
    margin-top: 40px;
    font-weight: 800;
    font-size: 21px;
  }
  h5 {
    margin-top: 40px;
    font-size: 18px;
    font-weight: 800;
    text-shadow: 2px 2px 20px white;
  }

  p {
    margin-top: 20px;
    font-weight: 800;
    font-size: 16px;
  }
  li {
    margin-top: 20px;
    font-weight: 800;
    font-size: 16px;
  }
  blockquote {
    line-height: 1.2em;
    color: #aaa;
    font-size: 24px;
  }
  pre {
    margin: 20px 0 0;
  }
`;

export const PortfolioImages = styled.section`
  float: left;
  padding: 0 36px 0 0;
  width: 50%;
  overflow-y: scroll;
  max-height: calc(100vh - 100px);

  @media (max-width: 414px) {
    float: none;
    padding: 0;
    width: 100%;
    height: auto;
    overflow-y: visible;
  }

  img {
    padding: 16px;
    width: 100%;
    height: auto;

    @media (max-width: 414px) {
      float: left;
      margin: 0 0 8px;
      padding: 0;
      &:last-child {
        margin: 0 0 16px;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${PRIMARY_COLOR};
    border-radius: 6px;
  }
`;

const Portfolio = ({
  data: {
    portfolio: {
      frontmatter: { title, images, site },
      html,
    },
  },
}) => (
  <Wrapper>
    <Helmet>
      <title>{`${PREFIX}${title.toUpperCase()}`}</title>
      <meta name="og:title" content={`${PREFIX}${title.toUpperCase()}`} />
    </Helmet>
    <Title>{title}</Title>
    <GoSite>
      <a href={site} style={{ color: "#ed213a" }}>
        사이트 바로가기
      </a>
    </GoSite>
    <PortfolioImages>
      {images.map((image) => {
        if (image.includes("//")) {
          return <img key={image} src={image} alt={title} />;
        }

        const url = require(`~/resources/${image}`);

        return <img key={image} src={url} alt={title} />;
      })}
    </PortfolioImages>
    <PortfolioDescription>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </PortfolioDescription>
  </Wrapper>
);

Portfolio.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default Portfolio;
