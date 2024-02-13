import React, { useState } from "react"

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <AccordionTitle title={props.titleValue} />
            <button onClick={ () => { setCollapsed(!collapsed) } }>TOOGLE</button>
            {!collapsed ? <AccordionBody /> : ""}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>{ props.title }</h3>
    )
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;