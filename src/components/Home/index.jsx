import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { TITLE } from "~/constants";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Moon from "../parallax/common/Moon";
import Earth from "../parallax/common/Earth";
import Yello from "../parallax/common/Yello";
import { Link } from "gatsby";

import Six from "../parallax/06.png";
import Seven from "../parallax/07.png";
import "./styled.css";
import styled from "styled-components";

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

class ParallaxComponent extends React.Component {
  render() {
    return (
      <Parallax ref={(ref) => (this.parallax = ref)} pages={3}>
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

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.8 }}>
          <BlinkImage
            src={Seven}
            style={{
              display: "block",
              width: "10%",
              zIndex: "10",
            }}
            alt="cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.75}
          speed={0.5}
          style={{ opacity: 0.7 }}
        ></ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.8 }}>
          <mesh
            style={{
              position: "absolute",
              marginLeft: "50%",
              marginTop: "10%",
              zIndex: "6",
            }}
          >
            <Title>RESUME</Title>
          </mesh>
          <mesh
            style={{
              position: "absolute",
              marginLeft: "50%",
              marginTop: "20%",
              zIndex: "6",
            }}
          >
            <Content>MOVE TO </Content>
            <Content>JIGGLYPOP'S RESUME PAGE</Content>
          </mesh>

          <BlinkImage
            src={Seven}
            style={{ display: "block", width: "10%", marginLeft: "30%" }}
            alt="cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.8 }}>
          <mesh style={{ marginLeft: "40%" }}>
            <Yello />
          </mesh>
          <BlinkImage
            src={Seven}
            style={{ display: "block", width: "10%", marginLeft: "60%" }}
            alt="cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4}>
          <BlinkImage
            src={Seven}
            style={{
              position: "absolute",
              width: "10%",
              zIndex: "10",
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
          <mesh
            style={{
              marginLeft: "40%",
              marginBottom: "20%",
            }}
          >
            <Earth />
          </mesh>
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
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <mesh
            style={{
              position: "absolute",
              marginLeft: "-10%",
              zIndex: "6",
              marginTop: "-6vh",
            }}
          >
            <Title>JIGGLYPOP'S BLOG</Title>
          </mesh>
          <mesh
            style={{
              position: "absolute",
              marginLeft: "-10%",
              zIndex: "6",
              marginTop: "8vh",
            }}
          >
            <TitleRed>WELCOME TO JIGGLYPOP'S BLOG</TitleRed>
          </mesh>
          <mesh
            style={{
              position: "absolute",
              marginLeft: "-10%",
              zIndex: "6",
              marginTop: "13vh",
            }}
          >
            <Content>CLICK AND MOVE NEXT PAGE</Content>
          </mesh>
          <mesh style={{ marginLeft: "40%" }}>
            <Moon />
          </mesh>

          <BlinkImage
            src={Six}
            style={{ position: "absolute", width: "60%", zIndex: "10" }}
            alt="cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => this.parallax.scrollTo(0)}
        >
          <mesh
            style={{ position: "absolute", marginLeft: "10%", zIndex: "6" }}
          >
            <Link to={"portfolios/portfolio-1/"}>
              <TitleRed>GO TO MOVIESTAR PROJECT</TitleRed>
            </Link>
          </mesh>
          <mesh
            style={{
              position: "absolute",
              marginLeft: "10%",
              marginTop: "2vw",
              zIndex: "6",
            }}
          >
            <Content>MOVE TO PORTFOLIO PAGE</Content>
          </mesh>
          <mesh
            style={{
              position: "absolute",
              marginLeft: "10%",
              marginTop: "14vw",
              zIndex: "6",
            }}
          >
            <Title>PORTFOLIO</Title>
          </mesh>
        </ParallaxLayer>
      </Parallax>
    );
  }
}

class Home extends React.Component {
  constructor({ portfolios }) {
    super({ portfolios });
    console.log(portfolios);
  }
  render() {
    return (
      <>
        <ParallaxComponent />

        <Helmet>
          <title>{TITLE}</title>
          <meta name="og:title" content={TITLE} />
        </Helmet>
      </>
    );
  }
}

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;
