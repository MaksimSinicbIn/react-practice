import React from "react"

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

// let a = true && true && true;
// a = true;
// let a = true && false && true;
// a = false;
// let a = true && true && false;
// a = false;
// let a = "yo" && true && true;
// a = true;
// let a = true && true && "yo";
// a = "yo"; (true) - псевдоистина
// let a = "" && true && true;
// a = ""; (false) - псевдоложь
// let a = true && true && "";
// a = ""; (false) - псевдоложь

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
        return (
            <>
                <AccordionTitle title={props.titleValue} />
                {/* { props.collapsed === false && <AccordionBody /> } */}
                {/* ! - отрицание (если не) = дает противоположное значение */}
                { !props.collapsed && <AccordionBody /> }
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
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;