import React, { useEffect } from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css'




function Stone4({ speed }) {

    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: `translate(400%, 0%)` },
            { transform: `translate(-100%, 20%)` },
        ],
        timing: {
            duration: 18000, // Run for 18s
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



    return <img className="Stone4" ref={ref} src='https://vignette.wikia.nocookie.net/runescape2/images/a/a3/Pile_of_rock.png/revision/latest?cb=20111127013503' alt='stone' />
}

export default Stone4
