import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

import Six from "./06.png";
import Seven from "./07.png";
import Eight from "./08.png";
import Nine from "./09.png";

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

class BaseComponent extends React.Component {
  render() {
    return (
      <div>
        <mesh
          style={{
            marginLeft: "60%",
            marginTop: "10%",
            position: "absolute",
            zIndex: "9",
          }}
        >
          <img src={Nine} style={{ width: "250px" }} />
        </mesh>
        <mesh
          style={{
            marginLeft: "40%",
            marginTop: "20%",
            position: "absolute",
            zIndex: "8",
          }}
        >
          <img src={Six} style={{ width: "800px" }} />
        </mesh>
      </div>
    );
  }
}

export default BaseComponent;
