import React from "react";
import { useSpring, animated } from "react-spring";

function UseSpring() {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return <animated.div style={animation}>I will fade in</animated.div>;
}

export default UseSpring;
