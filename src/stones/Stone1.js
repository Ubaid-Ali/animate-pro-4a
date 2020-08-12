import React, {useEffect} from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css'

function Stone1({speed}) {

    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: `translate(500%, 0%)` },
            { transform: `translate(-100%, 0%)` },
        ],
        timing: {
            duration: 25000, // Run for 25 seconds
            iterations: Infinity, // Repeat infinite
            direction: "normal", // Run the animation forwards
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



    return <img className="Stone1" ref={ref} src='https://images.vexels.com/media/users/3/145874/isolated/preview/b55eccb8fb67c9fd017e5df9f47cab3e-stone-boulder-by-vexels.png' />
}

export default Stone1