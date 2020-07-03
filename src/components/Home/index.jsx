import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Wrapper from "~/components/Common/Wrapper";
import { TITLE } from "~/constants";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Moon from "../parallax/common/Moon";
import Earth from "../parallax/common/Earth";
import Yello from "../parallax/common/Yello";
import TextSpringMany from "../Common/TextSpringMany/TextSpringMany";
import { Link } from "gatsby";

import Six from "../parallax/06.png";
import Seven from "../parallax/07.png";
import Eight from "../parallax/08.png";
import Nine from "../parallax/09.png";
import "./styled.css";
// Little helpers ...
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
          <img
            src={Seven}
            style={{ display: "block", width: "30%", zIndex: "10" }}
            alt="cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.7 }}>
          <img
            src={Eight}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
            alt="cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.8 }}>
          <mesh
            style={{
              position: "absolute",
              marginLeft: "50%",
              marginTop: "10%",
              zIndex: "6",
            }}
          >
            <TextSpringMany
              items={["RESUME"]}
              fontSize={"50px"}
              color={"white"}
            />
          </mesh>
          <mesh
            style={{
              position: "absolute",
              marginLeft: "50%",
              marginTop: "20%",
              zIndex: "6",
            }}
          >
            <TextSpringMany
              items={["MOVE", "TO", "JIGGLYPOP", "RESUME", "PAGE"]}
              fontSize={"20px"}
              color={"white"}
            />
          </mesh>

          <img
            src={Seven}
            style={{ display: "block", width: "40%", marginLeft: "10%" }}
            alt="cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.8 }}>
          <mesh style={{ marginLeft: "40%" }}>
            <Yello />
          </mesh>
          <img
            src={Seven}
            style={{ display: "block", width: "50%", marginLeft: "50%" }}
            alt="cloud"
          />
          <img
            src={Six}
            style={{ display: "block", width: "60%", marginLeft: "70%" }}
            alt="cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4}>
          <img
            src={Seven}
            style={{ position: "absolute", width: "30%", zIndex: "10" }}
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
          <mesh style={{ marginLeft: "40%", marginBottom: "20%" }}>
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
            style={{ position: "absolute", marginLeft: "-10%", zIndex: "6" }}
          >
            <TextSpringMany
              items={["JIGGLYPOPS", "BLOG"]}
              fontSize={"40px"}
              color={"white"}
            />
            <TextSpringMany
              items={["CLICK AND", "MOVE NEXT", "PAGE"]}
              fontSize={"20px"}
              color={"white"}
            />
            <TextSpringMany
              items={["WELCOME TO", "JIGGLYPOP BLOG PAGE"]}
              fontSize={"30px"}
              color={"#d9534f"}
            />
          </mesh>
          <mesh style={{ marginLeft: "40%" }}>
            <Moon />
          </mesh>
          <img
            src={Six}
            style={{ position: "absolute", width: "80%", zIndex: "10" }}
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
        >
          <img src={Eight} style={{ width: "10%" }} alt="cloud" />
        </ParallaxLayer>

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
              <TextSpringMany
                items={["GO TO MOVIESTAR PROJECT"]}
                fontSize={"20px"}
                color={"#d9534f"}
              />
            </Link>

            <TextSpringMany
              items={["MOVE", "TO", "JIGGLYPOP", "PORTFOLIO", "PAGE"]}
              fontSize={"20px"}
              color={"white"}
            />
            <TextSpringMany
              items={["PORTFOLIO"]}
              fontSize={"40px"}
              color={"white"}
            />
          </mesh>
        </ParallaxLayer>
      </Parallax>
    );
  }
}

class Home extends React.Component {
  constructor({ portfolios }) {
    super({ portfolios });
  }
  render() {
    return (
      <>
        {/* <Wrapper isHome> */}
        <ParallaxComponent />
        {/* </Wrapper> */}
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
