import React, { useReducer, useState } from "react"
import { reducer } from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    //let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});

    return (
        <>
            {/* <AccordionTitle title={props.titleValue} onClick={ () => {setCollapsed(!collapsed)} }/> */}
            <AccordionTitle title={props.titleValue} onClick={ () => { dispatch({type: 'TOOGLE-COLLAPSED'})} }/>
            {!state.collapsed && <AccordionBody />}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={ () => { props.onClick() } }>{ props.title }</h3>
    )
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}