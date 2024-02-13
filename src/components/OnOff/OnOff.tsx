import React, { useState } from 'react';

type OnOffPropsType = {
    // on: boolean
}



export const OnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(false);

    const onStyle = {
        width: "40px",
        height: "25px",
        padding: "5px",
        backgroundColor: on ? "green" : "white"
    };
    
    const OffStyle = {
        width: "40px",
        height: "25px",
        padding: "5px",
        backgroundColor: !on ? "red" : "white"
    };
    
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };

    return (
        <div>
            <button style={onStyle} onClick={ () => { setOn(true) } }>On</button>
            <button style={OffStyle} onClick={ () => { setOn(false) } }>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    );
};

