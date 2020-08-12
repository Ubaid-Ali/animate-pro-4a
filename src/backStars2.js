import React, { useEffect } from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css'



function BackStars2({ speed }) { //props from App

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
            animation.updatePlaybackRate(animation.playbackRate = speed);
        };
        speedUp()
    })


    return (
        <img
            className="BackStars2"
            ref={ref}
            src='https://pngimage.net/wp-content/uploads/2019/05/stars-cute-png-.png'
            alt='stars'
        />
    )
}

export default BackStars2
