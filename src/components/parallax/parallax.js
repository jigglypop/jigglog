import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Moon from "./common/Moon";
import Earth from "./common/Earth";
import Yello from "./common/Yello";
import TextSpringMany from '../Common/TextSpringMany/TextSpringMany'
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
            src={"./07.png"}
            style={{ display: "block", width: "30%", zIndex: "10" }}
            alt="cloud"
          />

        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.7 }}>

          <img
            src={"./09.png"}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
            alt="cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.8 }}>
        <mesh style={{ position: "absolute", marginLeft:'50%',marginTop:'10%',zIndex: "6" }}>
          <TextSpringMany items={['RESUME']} fontSize={'100px'} color={'white'}/>
          </mesh>
          <mesh style={{ position: "absolute", marginLeft:'50%',marginTop:'20%',zIndex: "6" }}>
          <TextSpringMany items={['MOVE','TO','JIGGLYPOP', 'RESUME','PAGE']} fontSize={'60px'} color={'white'}/>
          </mesh>
          <img
            src={"./07.png"}
            style={{ display: "block", width: "40%", marginLeft: "10%" }}
            alt="cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.8 }}>

          <mesh style={{ marginLeft: "40%" }}>
            <Yello />
          </mesh>
          <img
            src={"./07.png"}
            style={{ display: "block", width: "50%", marginLeft: "50%" }}
            alt="cloud"
          />
          <img
            src={"./06.png"}
            style={{ display: "block", width: "60%", marginLeft: "70%" }}
            alt="cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4}>

          <img
            src={"./07.png"}
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

          <mesh style={{ marginLeft: "40%" }}>
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
          <mesh style={{ position: "absolute", marginLeft:'-10%',zIndex: "6" }}>
          <TextSpringMany items={['JIGGLYPOPS','BLOG']} fontSize={'100px'} color={'white'}/>
          </mesh>
          <mesh style={{ marginLeft: "40%" }}>
            <Moon />
          </mesh>
          <img
            src={"./06.png"}
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
          
          <img src={"./08.png"} style={{ width: "10%" }} alt="cloud" />
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
        >        <mesh style={{ position: "absolute", marginLeft:'-20%',zIndex: "6" }}>
        <TextSpringMany items={['PORTFOLIO']} fontSize={'100px'} color={'white'}/>
        </mesh>
        <mesh style={{ position: "absolute", marginLeft:'10%',zIndex: "6" }}>
        <TextSpringMany items={['MOVE','TO','JIGGLYPOP', 'PORTFOLIO','PAGE']} fontSize={'60px'} color={'white'}/>
        </mesh></ParallaxLayer>
      </Parallax>
    );
  }
}
export default ParallaxComponent;
