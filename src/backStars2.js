import React, {useEffect} from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css'
import App from './App';



function BackStars2({ speed }) { //props from App

    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: `translate(250%, 0%)` },
            { transform: `translate(-150%, 0%)` },
        ],
        timing: {
            duration: 20000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "normal", // Run the animation forwards and then backwards
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

    // update speed using props
    useEffect(() => {
        const speedUp = () => {
            const animation = getAnimation();
            animation.updatePlaybackRate(animation.playbackRate + speed);
        };
        speedUp()
    }, [speed])


    return <img className="BackStars2" ref={ref} src='https://pngimg.com/uploads/star/star_PNG76860.png' />
}

export default BackStars2
