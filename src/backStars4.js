import React, { useEffect } from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css'




function BackStars4({ speed }) {

    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: `translate(250%, 0%)` },
            { transform: `translate(-100%, 0%)` },
        ],
        timing: {
            duration: 18000, // Run for 18s
            iterations: Infinity, // Repeat infinity
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
            className="BackStars4"
            ref={ref}
            src='https://pngimg.com/uploads/star/star_PNG76860.png'
            alt='stars'
        />
    )
}

export default BackStars4
