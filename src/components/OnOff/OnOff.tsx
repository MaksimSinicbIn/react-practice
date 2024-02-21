import React, { useState } from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}



export const OnOff = (props: OnOffPropsType) => {

    

    const onStyle = {
        width: "40px",
        height: "25px",
        padding: "5px",
        backgroundColor: props.on ? "green" : "white"
    };
    
    const OffStyle = {
        width: "40px",
        height: "25px",
        padding: "5px",
        backgroundColor: !props.on ? "red" : "white"
    };
    
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    };

    return (
        <div>
            <button style={onStyle} onClick={ () => { props.onChange(true) } }>On</button>
            <button style={OffStyle} onClick={ () => { props.onChange(false) } }>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    );
};

