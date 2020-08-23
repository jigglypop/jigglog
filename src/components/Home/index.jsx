import React, { useRef } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { TITLE } from "~/constants";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Moon from "../parallax/common/Moon";
import Earth from "../parallax/common/Earth";
import Yello from "../parallax/common/Yello";
import { Link } from "gatsby";

import Six from "../parallax/06.webp";
import Seven from "../parallax/07.webp";
import "./styled.css";
import styled from "styled-components";
import IconSet from "../IconSet/IconSet";

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
const IconWrapper = styled.div`
  position: absolute;
  margin-left: 60%;
  margin-top: 10%;
  z-index: 18;
  @media (max-width: 1000px) {
    font-size: 20px;
    margin-top: 30%;
  }
`;

const Title = styled.div`
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
  @media (max-width: 600px) {
    font-size: 20px;
    font-weight: 800;
    text-shadow: 4px 4px 40px white;
  }
`;

const TitleRed = styled.div`
  color: #e94057;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 800;
  text-shadow: 4px 4px 40px #e94057;
  @media (max-width: 600px) {
    font-size: 13px;
    font-weight: 800;
    text-shadow: 4px 4px 40px white;
  }
`;

const Content = styled.div`
  font-size: 20px;
  font-weight: 800;
  text-shadow: 4px 4px 40px white;
  @media (max-width: 600px) {
    font-size: 13px;
    font-weight: 800;
    text-shadow: 4px 4px 40px white;
  }
`;
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const ParallaxComponent = ({ portfolios }) => {
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
    "mongodblogo",
    "herokulogo",
    "graphqllogo",
    "expresslogo",
    "mobxlogo",
    "typescriptlogo",
    "nextjslogo",
  ];
  let parallax;

  const ref = useRef();

  return (
    <Parallax ref={(ref) => (parallax = ref)} pages={3}>
      <ParallaxLayer
        offset={1}
        speed={1}
        style={{ backgroundColor: "#000428", opacity: 0.8 }}
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{ backgroundColor: "#302b63", opacity: 0.6 }}
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
        offset={1.2}
        speed={1.4}
        onClick={() => parallax.scrollTo(2)}
        style={{ opacity: 0.8, zIndex: "20" }}
      >
        <div
          style={{
            position: "absolute",
            marginLeft: "40%",
            marginTop: "10%",
            zIndex: "8",
          }}
        >
          <Title>RESUME</Title>
          <Link to={"/resume"}>
            <Content>MOVE TO </Content>
            <Content>JIGGLYPOP'S RESUME PAGE</Content>
          </Link>
        </div>

        <BlinkImage
          src={Six}
          style={{ position: "absolute", width: "600px", marginRight: "50vw" }}
          alt="cloud"
        />
        <Link to={"/resume"}>
          <IconWrapper>
            <IconSet IconObject={IconObject} />
          </IconWrapper>
        </Link>
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.7 }}>
        <div>
          <Yello
            style={{
              display: "absolute",
              width: "200px",
              marginLeft: "20%",
              marginTop: "-10%",
              zIndex: -10,
            }}
          />
        </div>

        <BlinkImage
          src={Seven}
          style={{
            display: "block",
            width: "200px",
            marginLeft: "60%",
            marginTop: "20%",
          }}
          alt="cloud"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2.5}
        speed={-0.4}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            marginLeft: "30%",
            marginBottom: "50%",
          }}
        >
          <Earth />
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={-0.3}
        style={{
          backgroundSize: "80%",
          backgroundPosition: "center",
        }}
      />
      <ParallaxLayer
        offset={0}
        speed={0.4}
        onClick={() => parallax.scrollTo(1)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ marginLeft: "30%" }}>
          <Moon />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0.1}
        onClick={() => parallax.scrollTo(1)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            marginLeft: "-10%",
            zIndex: "6",
            marginTop: "-6vh",
          }}
        >
          <Title>JIGGLYPOP'S BLOG</Title>
        </div>

        <div
          style={{
            position: "absolute",
            marginLeft: "-10%",
            zIndex: "6",
            marginTop: "5vh",
          }}
        >
          <TitleRed>WELCOME TO JIGGLYPOP'S BLOG</TitleRed>
          <Content>CLICK AND MOVE NEXT PAGE</Content>
        </div>

        <BlinkImage
          src={Six}
          style={{ position: "absolute", width: "700px", zIndex: "10" }}
          alt="cloud"
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={-0}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => parallax.scrollTo(0)}
      >
        <div
          style={{
            position: "absolute",
            marginTop: "-3vw",
            marginLeft: "-10vw",
            zIndex: "6",
          }}
        >
          <Title style={{ marginBottom: "10px" }}>PORTFOLIO</Title>
          <Link to={"/portfolios"}>
            <Content>MOVE TO PORTFOLIO PAGE</Content>
          </Link>
          {portfolios.map((items, index) => (
            <Link to={items.node.frontmatter.path} key={index}>
              <TitleRed>{items.node.frontmatter.title}</TitleRed>
            </Link>
          ))}
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

const Home = ({ portfolios }) => {
  return (
    <>
      <ParallaxComponent portfolios={portfolios} />

      <Helmet>
        <title>{TITLE}</title>
        <meta name="og:title" content={TITLE} />
      </Helmet>
    </>
  );
};

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;
