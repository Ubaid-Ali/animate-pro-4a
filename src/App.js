import React, { useState } from 'react';
import './App.css';
import useWebAnimations from '@wellyshen/use-web-animations';

import BackStars1 from './backStars1'
import BackStars2 from './backStars2'
import BackStars3 from './backStars3'
import BackStars4 from './backStars4'
import Stone1 from './stones/Stone1'
import Stone2 from './stones/Stone2'
import Stone3 from './stones/Stone3'
import Stone4 from './stones/Stone4'

// Helicopter component
function App() {
  const [speed, setSpeed] = useState(0.01) // sent props to children

  const [heliAnimate, setHeliAnimate] = useState(0) // up and down state

  // useWebAnimations library
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: `translate(0px, ${heliAnimate}px)` },
    ],
    timing: {
      duration: 998, // Run for 1000ms
      iterations: 1, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    onReady: ({ playState, animate, animation }) => {
      // Triggered when the animation is ready to play (Google Chrome: available in v84+)
      setHeliAnimate(0)
    },
    onUpdate: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the running state or changes state
    },
    onFinish: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
    },
    // More useful options...
  });

  // console.log(speed)


  return (
    <div className="App">
      <BackStars1 speed={speed} />
      <BackStars2 speed={speed} />
      <BackStars3 speed={speed} />
      <BackStars4 speed={speed} />
      <Stone1 speed={speed} />
      <Stone2 speed={speed} />
      <Stone3 speed={speed} />
      <Stone4 speed={speed} />
      <img
        // style={helicopStyle}
        ref={ref}
        className='helicopter'
        src='https://pngimage.net/wp-content/uploads/2018/06/%D0%B2%D0%B5%D1%80%D1%82%D0%BE%D0%BB%D0%B5%D1%82-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-png-4.png'
        alt='helicopter'
      />

      <div className='buttons-div'>


        {/* Speed Slow Button */}
        <button
          className='speed-slow'
          onClick={() => {
              setSpeed(speed - 0.01);
              console.log(speed)
          }}
        >Speed Slow</button>

        <div className='up-down-btn-div' >

          {/* Up Button */}
          <button
            className='button-up'
            onClick={() => {
              setHeliAnimate((val) => val = -550);
            }}
          >Up</button> <br />

          {/* Down Button */}
          <button
            className='button-down'
            onClick={() => {
              setHeliAnimate((val) => val = 500);
            }}
          >Down</button>
        </div>

        {/* Speed Up Button */}
        <button
          className='speed-up'
          onClick={() => {
            setSpeed(speed + 0.1);
            console.log(speed)
          }}
        >Speed Up</button>

      </div>

    </div >
  );
}

export default App;
