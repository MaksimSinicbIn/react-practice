import { useEffect, useState } from "react";

type PropsType = {

}

const get2DigitsString = (number: number) => number < 10 ? '0' + number : number

export const Clock: React.FC<PropsType> = () => {
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

    const secondsStrings = get2DigitsString(date.getSeconds())
    const minutesStrings = get2DigitsString(date.getMinutes())
    const hoursStrings = get2DigitsString(date.getHours())

    return (
        <div>
            <span>{hoursStrings}</span>
            :
            <span>{minutesStrings}</span>
            :
            <span>{secondsStrings}</span>
        </div>
    )
}