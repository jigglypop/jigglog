import PropTypes from "prop-types";
import React, { Component, useRef } from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import { PREFIX } from "~/constants";
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

const TitleBig = styled.div`
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
  font-size: 100px;
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

const Portfolios = ({
  data: {
    portfolios: { edges: portfolios },
  },
}) => {
  let parallax;

  const ref = useRef();
  const onClick = (index) => {
    if (portfolios.length - 1 === index) {
      parallax.scrollTo(0);
    } else {
      parallax.scrollTo(index + 1);
    }
  };
  return (
    <>
      <Wrapper>
        <Helmet>
          <title>{`${PREFIX}PORTFOLIOS`}</title>
          <meta name="og:title" content={`${PREFIX}PORTFOLIOS`} />
        </Helmet>
      </Wrapper>
      <Parallax ref={(ref) => (parallax = ref)} pages={portfolios.length}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        {portfolios.map(
          (
            {
              node: {
                frontmatter: { path, title, description, images = [] },
              },
            },
            index
          ) => (
            <>
              <ParallaxLayer offset={index} speed={1}>
                <img
                  src={require(`~/resources/${images[0]}`)}
                  alt="portfolio"
                  style={{ opacity: 0.3 }}
                />
              </ParallaxLayer>
              <ParallaxLayer
                offset={index}
                speed={-0}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => onClick(index)}
              >
                <Link to={path}>
                  <mesh
                    style={{
                      position: "absolute",
                      marginLeft: "-30%",
                      zIndex: "6",
                    }}
                  >
                    <TitleBig>{title}</TitleBig>
                    <Content>{description}</Content>
                  </mesh>
                </Link>

                <mesh
                  style={{
                    position: "absolute",
                    marginTop: "-20vh",
                    zIndex: "6",
                  }}
                >
                  {portfolios.map((items) => (
                    <Link to={items.node.frontmatter.path}>
                      <Content>{items.node.frontmatter.title}</Content>
                    </Link>
                  ))}
                </mesh>
              </ParallaxLayer>
            </>
          )
        )}
      </Parallax>
    </>
  );
};

Portfolios.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Portfolios;
