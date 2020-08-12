import React, { useEffect } from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css'

function BackStars1({ speed }) {



    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: `translate(600%, 0%)` },
            { transform: `translate(-100%, 0%)` },
        ],
        timing: {
            duration: 30000, // Run for 30s
            iterations: Infinity, // Repeat infinite
            direction: "normal", // Run the animation forwards
        },
    });

    // update speed using props
    useEffect(() => {
        const speedUp = () => {
            const animation = getAnimation();
            animation.updatePlaybackRate(animation.playbackRate = speed);
        };
        speedUp()
    })



    return (
        <img className="BackStars1"
            ref={ref}
            src='https://pngimage.net/wp-content/uploads/2019/05/stars-cute-png-.png'
            alt='stars'
        />
    )
}

export default BackStars1
