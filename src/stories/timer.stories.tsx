import React, { useEffect } from "react"
import { useState } from "react"

export default {
    title: 'Timer demo',
}

export const Timer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    const getTime = () => {
        const time = Date.now();

        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {hours}:{minutes}:{seconds}
        </>
    );
};