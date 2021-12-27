import React, { useState } from "react";
import "./App.css";
import useWebAnimations from "@wellyshen/use-web-animations";

import spaceShip from "./Images/alien-spaceship.png";
import stone1Src from "./Images/stone1.png";
import stone2Src from "./Images/stone2.png";
import stone3Src from "./Images/stone3.png";
import stone4Src from "./Images/stone4.png";
import stone5Src from "./Images/stone5.png";

import Stone from "./components/Stone";
import Stars from "./components/Stars";

const stoneSources = [stone1Src, stone2Src, stone3Src, stone4Src, stone5Src];

function App() {
  // speed control stars and stones
  const [speed, setSpeed] = useState(0.1); // fast and slow
  const [heliAnimate, setHeliAnimate] = useState(0); // up and down spaceship

  const handleSpeed = (e) => {
    e.persist();
    if (e.target.id === "speed-slow" && speed >= 0) {
      setSpeed((spd) => spd - 0.1);
    } else if (e.target.className === "speed-up") {
      setSpeed((spd) => spd + 0.1);
    }
  };

  const spaceShipUpDownHandler = (e) => {
    e.persist();
    if (e.target.id === "button-up") setHeliAnimate((up) => (up = -500));
    else if (e.target.id === "button-down")
      setHeliAnimate((down) => (down = 500));
  };

  // SpaceShip Animations
  const { ref } = useWebAnimations({
    keyframes: [{ transform: `translate(0px, ${heliAnimate}px)` }],
    timing: {
      duration: 998, // Run for 998ms
      iterations: 1, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    onReady: ({ playState, animate, animation }) => {
      // Triggered when the animation is ready to play (Google Chrome: available in v84+)
      setHeliAnimate(0);
    },
  });

  return (
    <div className="App">
      {/* STARS */}
      <Stars speed={speed} starNum={1} />
      <Stars speed={speed} starNum={2} />
      <Stars speed={speed} starNum={3} />
      <Stars speed={speed} starNum={4} />
      <Stars speed={speed} starNum={5} />

      {/* STONES */}
      {stoneSources.map((source, index) => (
        <Stone
          speed={speed}
          stoneSrc={source}
          key={index}
          stoneNum={index + 1}
        />
      ))}

      <div className="buttons-div">
        {/* Speed Slow Button */}
        <button id="speed-slow" className="speed-slow" onClick={handleSpeed}>
          Speed Slow
        </button>

        <div className="up-down-btn-div">
          {/* Up Button */}
          <button
            id="button-up"
            className="button-up"
            onClick={spaceShipUpDownHandler}
          >
            Up
          </button>{" "}
          <br />
          {/* Down Button */}
          <button
            id="button-down"
            className="button-down"
            onClick={spaceShipUpDownHandler}
          >
            Down
          </button>
        </div>

        {/* Speed-Up Button / Speed-Fast */}
        <button className="speed-up" id="speed-up" onClick={handleSpeed}>
          Speed Up
        </button>
      </div>
      {/* Space Ship */}
      <img src={spaceShip} ref={ref} className="space-ship" alt="space-ship" />
    </div>
  );
}

export default App;
