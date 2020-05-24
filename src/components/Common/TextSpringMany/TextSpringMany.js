import React, { useState } from "react";
import { render } from "react-dom";
import { useTrail, animated } from "react-spring";

function TextSpringMany({ items, fontSize, color }) {
  const [toggle, set] = useState(true);
  const config = { mass: 5, tension: 2000, friction: 200 };

  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className="trails-main" onClick={() => set((state) => !state)}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              position: "relative",
              width: "100%",
              height: fontSize,
              lineHeight: fontSize,
              color: color,
              fontSize: fontSize,
              fontWeight: "800",
            }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
export default TextSpringMany;
