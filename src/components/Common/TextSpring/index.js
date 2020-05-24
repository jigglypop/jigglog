import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function TextSpring({ text, fontSize, color }) {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });
  return (
    <div
      onClick={() => toggle(!state)}
      style={{ fontWeight: "600", fontSize: fontSize, color: color }}
    >
      <animated.div
        style={{
          opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 1, 0.9, 1],
            })
            .interpolate((x) => `scale(${x})`),
        }}
      >
        {text}
      </animated.div>
    </div>
  );
}
