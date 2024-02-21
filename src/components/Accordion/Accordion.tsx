import React from "react"

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
        return (
            <>
                <AccordionTitle title={props.titleValue} onChange={props.onChange} />
                {/* { props.collapsed === false && <AccordionBody /> } */}
                {/* ! - отрицание (если не) = дает противоположное значение */}
                { !props.collapsed && <AccordionBody /> }
            </>
        )
    }

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{ props.title }</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;