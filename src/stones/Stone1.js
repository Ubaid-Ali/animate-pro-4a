import React, { useEffect } from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css'


function Stone1({ speed }) {

    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: `translate(1200%, 0%)` },
            { transform: `translate(-100%, -50%)` },
        ],
        timing: {
            duration: 25000, // Run for 25 seconds
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



    return <img className="Stone1" ref={ref} src='https://pngimg.com/uploads/stone/stone_PNG13612.png' alt='stone'/>
}

export default Stone1
