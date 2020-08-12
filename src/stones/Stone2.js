import React, { useEffect } from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css'



function Stone2({ speed }) {

    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: `translate(800%, 0%)` },
            { transform: `translate(-100%, -10%)` },
        ],
        timing: {
            duration: 23000, // Run for 23s
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



    return <img className="Stone2" ref={ref} src='https://lh3.googleusercontent.com/proxy/yqfIk2wnWLz4WG-7jU_Ii1SnDc3iuYdY0R3lXSM2CDFXyKT3dny-megTS1RGCnkmiSMAYRbsjUuHCs5LsT_eQq3JvM6eyB_oUwH4o-OIGoVJwEivqKcQDko' alt='stone' />
}

export default Stone2
