import React, { useEffect, useState } from "react";
import { DigitalClockView } from "./DigitalClockView";
import { AnaloglClockView } from "./AnalogClockView";

type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick');
            
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    // const secondsStrings = get2DigitsString(date.getSeconds())
    // const minutesStrings = get2DigitsString(date.getMinutes())
    // const hoursStrings = get2DigitsString(date.getHours())

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnaloglClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    )
}

export type ClockViewPropsType = {
    date: Date
}