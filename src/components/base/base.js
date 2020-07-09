import React from "react";
// import Six from "./06.png";
// import Nine from "./09.png";
import Six from "../../components/parallax/06.webp";
import Nine from "../../components/parallax/07.webp";
class BaseComponent extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            marginLeft: "60%",
            marginTop: "10%",
            position: "absolute",
            zIndex: "9",
          }}
        >
          <img src={Nine} style={{ width: "300px" }} />
        </div>
        <div
          style={{
            marginLeft: "40%",
            marginTop: "20%",
            position: "absolute",
            zIndex: "8",
          }}
        >
          <img src={Six} style={{ width: "600px" }} />
        </div>
      </div>
    );
  }
}

export default BaseComponent;
