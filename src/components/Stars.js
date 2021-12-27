import React, { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "../App.css";
import StarsPngSrc from "../Images/stars/stars.png";

function Stars({ speed, starNum }) {
  //props from App

  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: `translate(700%, 0%)` },
      { transform: `translate(-150%, 0%)` },
    ],
    timing: {
      duration: 20000, // Run for 20s
      iterations: Infinity, // Repeat infinite
      direction: "normal", // Run the animation forwards
    },
  });

  // update speed using props
  useEffect(() => {
    const speedUp = () => {
      const animation = getAnimation();
      animation.updatePlaybackRate(
        (animation.playbackRate = speed + Number(`0.${starNum}`))
      );
    };
    speedUp();
  });

  return (
    <img
      className="stars"
      ref={ref}
      src={StarsPngSrc}
      alt="stars"
      style={{ marginTop: `${starNum * 6}% ` }}
    />
  );
}

export default Stars;
