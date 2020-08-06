import React, { useState, useEffect } from 'react';
import './App.css';
import useWebAnimations from '@wellyshen/use-web-animations';

import BackStars from './backStars'
import BackStars2 from './backStars2'
import BackStars3 from './backStars3'
import BackStars4 from './backStars4'


function App() {
  const [time, setTime] = useState(100)
  const [heliAnimate, setHeliAnimate] = useState(0)


  const [helicopStyle, setHeliStyle] = useState()

  const timer = () => {
    setTime(val => heliAnimate + val) //state
    setTimeout(() => {
      setHeliStyle({ marginTop: `${time}px` })
    }, 999);
  }

  const { ref, playState } = useWebAnimations({
    keyframes: [
      { transform: `translate(0px, ${heliAnimate}px)` },
    ],
    timing: {
      duration: 997, // Run for 1000ms
      iterations: 1, // Repeat once
      direction: "normal", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    onReady: ({ playState, animate, animation }) => {
      // Triggered when the animation is ready to play (Google Chrome: available in v84+)

    },
    onUpdate: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the running state or changes state
    },
    onFinish: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
      setHeliAnimate((val) => val = 0)
    },
    // More useful options...
  });



  return (
    <div className="App">
      <BackStars4 />
      <BackStars2 />
      <BackStars3 />
      <BackStars />
      <img
        style={helicopStyle}
        ref={ref}
        className='helicopter'
        src='https://pngimage.net/wp-content/uploads/2018/06/%D0%B2%D0%B5%D1%80%D1%82%D0%BE%D0%BB%D0%B5%D1%82-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-png-4.png'
        alt='helicopter'
      />
      {/* Down button */}
      <button
        className='button-Up'
        onClick={() => {
          setHeliAnimate((val) => val = -100);
          let marginTop = -100
          timer(marginTop);
        }}
      >UP</button>

      {/* Up Button */}
      <button
        className='button-down'
        onClick={() => {
          setHeliAnimate((val) => val = 100);
          let marginTop = 100
          timer(marginTop);
        }}
      >DOWN</button>
    </div>
  );
}

export default App;
