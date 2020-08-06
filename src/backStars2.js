import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css'

function BackStars2() {

    // const starClass = {
    //     width: '1280px',
    // }



    const { ref, playState } = useWebAnimations({
        keyframes: [
            { transform: `translate(150%, 0%)` },
            { transform: `translate(-150%, 0%)` },
        ],
        timing: {
            // delay: 4000,
            duration: 12000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "normal", // Run the animation forwards and then backwards
            // easing: "ease-in-out", // Use a fancy timing function
        },
        onReady: ({ playState, animate, animation }) => {
            // Triggered when the animation is ready to play (Google Chrome: available in v84+)
        },
        onUpdate: ({ playState, animate, animation }) => {
            // Triggered when the animation enters the running state or changes state
        },
        onFinish: ({ playState, animate, animation }) => {
            // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
        },
        // More useful options...
    });

    return <img className="target" ref={ref} src='https://pngimg.com/uploads/star/star_PNG76860.png' />
}

export default BackStars2
