import React, { useEffect } from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css'

function Stone3({ speed }) {

    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: `translate(800%, 0%)` },
            { transform: `translate(-100%, 50%)` },
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

    return <img className="Stone3" ref={ref} src='https://i.pinimg.com/originals/3a/ae/29/3aae2993f4b0e46444c1a0987962a2a1.png' alt='stone' />
}

export default Stone3
