import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Moon from "./common/Moon";

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
const Pink = ({ children }) => (
  <span style={{ color: "#FF6AC1" }}>{children}</span>
);
const Yellow = ({ children }) => (
  <span style={{ color: "#EFF59B" }}>{children}</span>
);
const Lightblue = ({ children }) => (
  <span style={{ color: "#9AEDFE" }}>{children}</span>
);
const Green = ({ children }) => (
  <span style={{ color: "#57EE89" }}>{children}</span>
);
const Blue = ({ children }) => (
  <span style={{ color: "#57C7FF" }}>{children}</span>
);
const Gray = ({ children }) => (
  <span style={{ color: "#909090" }}>{children}</span>
);
class BaseComponent extends React.Component {
  render() {
    return (
      <div>
          <mesh style={{ marginLeft: "60%" ,marginTop:'10%',position:'absolute',zIndex:'9'}}>
          <img
            src={'/09.png'}
            style={{width:'250px'}}
          />         
           </mesh>
           <mesh style={{ marginLeft: "40%" ,marginTop:'20%',position:'absolute',zIndex:'8'}}>
 
                    <img
            src={'/06.png'}
            style={{width:'800px'}}
          />       
           </mesh>
          <mesh style={{ marginLeft: "60%" ,marginTop:'10%',position:'absolute',zIndex:'7',width:'100%'}}>
            <Moon />
          </mesh>
      </div>
    );
  }
}

export default BaseComponent;