import React, { useEffect } from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css'

function Stone4({ speed }) {

    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: `translate(200%, 0%)` },
            { transform: `translate(-100%, 0%)` },
        ],
        timing: {
            duration: 20000, // Run for 1000ms
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
    });

    // update speed using props
    useEffect(() => {
        const speedUp = () => {
            const animation = getAnimation();
            animation.updatePlaybackRate(animation.playbackRate + speed);
        };
        speedUp()
    }, [speed])



    return <img className="Stone4" ref={ref} src='https://images.vexels.com/media/users/3/145874/isolated/preview/b55eccb8fb67c9fd017e5df9f47cab3e-stone-boulder-by-vexels.png' />
}

export default Stone4
