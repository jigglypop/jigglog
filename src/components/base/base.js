import React from "react";
import Six from "./06.png";
import Nine from "./09.png";

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
          <img src={Nine} style={{ width: "100px" }} />
        </div>
        <div
          style={{
            marginLeft: "40%",
            marginTop: "20%",
            position: "absolute",
            zIndex: "8",
          }}
        >
          <img src={Six} style={{ width: "800px" }} />
        </div>
      </div>
    );
  }
}

export default BaseComponent;
