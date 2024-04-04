import React, { useEffect } from "react"
import { useState } from "react"

export default {
    title: 'UseEffect demo',
}

export const SimpleExample = () => {
    console.log('SimpleExample');
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect( () => {
        console.log('useEffect evert render');
        document.title = counter.toString()
    })

    useEffect( () => {
        console.log('useEffect only first render (componentDidMount');
        document.title = counter.toString()
    }, [])

    useEffect( () => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={ () => setFake(fake + 1)}>Fake +</button>
        <button onClick={ () => setCounter(counter + 1)}>Conter +</button>
    </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample');
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect( () => {
        setInterval( () => {
            console.log('tick: ' + counter);
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, couner: {counter} - fake: {fake}
        {/* <button onClick={ () => setFake(fake + 1)}>Fake +</button>
        <button onClick={ () => setCounter(counter + 1)}>Conter +</button> */}
    </>
}