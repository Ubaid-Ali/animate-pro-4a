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

//  component
function App() {

  // speed control stars and stones
  // send props to all children components
  const [speed, setSpeed] = useState(1.0)

  // up and down state
  const [heliAnimate, setHeliAnimate] = useState(0)

  // useWebAnimations library
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: `translate(0px, ${heliAnimate}px)` },

    ],
    timing: {
      duration: 998, // Run for 998ms
      iterations: 1, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    onReady: ({ playState, animate, animation }) => {
      // Triggered when the animation is ready to play (Google Chrome: available in v84+)
      setHeliAnimate(0)
    },
    // onUpdate: ({ playState, animate, animation }) => {
    //   // Triggered when the animation enters the running state or changes state
    // },
    // onFinish: ({ playState, animate, animation }) => {
    //   // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
    // },
    // More useful options...
  });



  return (
    <div className='picture'>
      <div className="App">
        <BackStars1 speed={speed} />
        <BackStars2 speed={speed} />
        <BackStars3 speed={speed} />
        <BackStars4 speed={speed} />
        <Stone1 speed={speed} />
        <Stone2 speed={speed} />
        <Stone3 speed={speed} />
        <Stone4 speed={speed} />

        {/* Space Ship */}
        <img src='https://pngimage.net/wp-content/uploads/2018/05/alien-spaceship-png-4.png'
          ref={ref}
          className='space-ship'
          alt='space-ship'
        />

        <div className='buttons-div'>

          {/* Speed Slow Button */}
          <button
            className='speed-slow'
            onClick={() => {
              if (speed >= 0) {
                setSpeed((spd) => spd - 0.1);
                console.log('Speed ', speed)
              }
            }}
          >Speed Slow</button>

            {/* two button div for style */}
          <div className='up-down-btn-div' >

            {/* Up Button */}
            <button
              className='button-up'
              onClick={() => {
                setHeliAnimate((up) => up = -550);
              }}
            >Up</button> <br />

            {/* Down Button */}
            <button
              className='button-down'
              onClick={() => {
                setHeliAnimate((dn) => dn = 500);
              }}
            >Down</button>
          </div>

          {/* Speed Up Button */}
          <button
            className='speed-up'
            onClick={() => {
              setSpeed((spd) => spd + 0.1);
              console.log('Speed ', speed)
            }}
          >Speed Up</button>

        </div>

      </div >
    </div>
  );
}

export default App;
