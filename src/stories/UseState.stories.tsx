import React from "react"
import { useState } from "react"

export default {
    title: 'UseState demo',
}

const generateData = () => {
    // difficult counting
    console.log('generateData');
    return 123456
}

export const Example1 = () => {
    console.log('Example1');
    const [counter, setCounter] = useState(generateData);

    return <>
        <button onClick={ () => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}