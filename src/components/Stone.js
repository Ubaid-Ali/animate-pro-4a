import React, { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "../App.css";

// Main Function
function Stone1({ speed, stoneSrc, stoneNum }) {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: `translate(700%, 0%)` },
      { transform: `translate(-150%, 0%)` },
    ],
    timing: {
      duration: 5000, // Run for 5 seconds
      iterations: Infinity, // infinite
      direction: "normal", // Run the animation forwards
    },
  });

  // update speed using props
  useEffect(() => {
    const speedUp = () => {
      const animation = getAnimation();
      animation.updatePlaybackRate(
        (animation.playbackRate = speed + Number(`0.${stoneNum}`))
      );
    };
    speedUp();
  });
  return (
    <img
      className="stone"
      ref={ref}
      src={stoneSrc}
      alt="stone"
      style={{ marginTop: `${stoneNum * 6}% ` }}
    />
  );
}

export default Stone1;
