import PropTypes from "prop-types";
import React, { Component, useRef } from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import PortfolioCard from "~/components/Common/PortfolioCard";
import { PREFIX } from "~/constants";
import TextSpringMany from "../Common/TextSpringMany/TextSpringMany";
import styled from "styled-components";
import SimpleWrapper from "~/components/Common/SimpleWrapper";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

export const Wrapper = styled(SimpleWrapper)`
  padding: 100px 0 0;

  @media (max-width: 414px) {
    padding: 70px 0 0;
  }
`;
const BlinkImage = styled.img`
  animation: blink 0.5s ease-in-out infinite alternate;

  @keyframes blink {
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Title = styled.div`
  font-family: "NanumBarunGothic" !important;
  animation: blink 1.2s ease-in-out infinite alternate;

  @keyframes blink {
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  font-size: 40px;
  font-weight: 800;
  text-shadow: 4px 4px 40px white;
`;

const TitleRed = styled.div`
  font-family: "NanumBarunGothic" !important;

  color: #e94057;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 800;
  text-shadow: 4px 4px 40px white;
`;

const Content = styled.div`
  font-family: "NanumBarunGothic" !important;

  font-size: 20px;
  font-weight: 800;
  text-shadow: 4px 4px 40px white;
`;
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const ParallaxComponent = ({ portfolios }) => {
  let parallax;

  const ref = useRef();
  return (
    <Parallax ref={(ref) => (parallax = ref)} pages={3}>
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{ backgroundColor: "#8B00FF", opacity: 0.3 }}
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{ backgroundColor: "#805E73", opacity: 0.3 }}
      />

      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
        }}
      />
      <ParallaxLayer
        offset={1.75}
        speed={0.5}
        style={{ opacity: 0.7 }}
      ></ParallaxLayer>
    </Parallax>
  );
};

const Portfolios = ({
  data: {
    portfolios: { edges: portfolios },
  },
}) => (
  <Wrapper>
    <Helmet>
      <title>{`${PREFIX}PORTFOLIOS`}</title>
      <meta name="og:title" content={`${PREFIX}PORTFOLIOS`} />
    </Helmet>

    {portfolios.map(
      ({
        node: {
          frontmatter: { path, title, description, images = [] },
        },
      }) => {
        const [image = null] = images;
        if (image !== null) {
          return (
            <PortfolioCard key={path}>
              <Link to={path}>
                {image.includes("//") ? (
                  <img src={image} alt="portfolio" />
                ) : (
                  <img src={require(`~/resources/${image}`)} alt="hello" />
                )}
              </Link>
            </PortfolioCard>
          );
        }

        return (
          <PortfolioCard key={path}>
            <Link to={path}>
              <h4>{title}</h4>
            </Link>
          </PortfolioCard>
        );
      }
    )}
  </Wrapper>
);

Portfolios.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Portfolios;
