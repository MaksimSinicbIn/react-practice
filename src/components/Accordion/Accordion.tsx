import React from "react"

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
        return (
            <>
                <AccordionTitle title={props.titleValue} onChange={props.onChange} />
                {
                    !props.collapsed && <AccordionBody
                                            items={props.items}
                                            onClick={props.onClick} /> 
                }
            </>
        )
    }

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ (event) => props.onChange()}>{ props.title }</h3>
    )
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map( (i, index) => {
                return <li onClick={ () => props.onClick(i.value)} key={index}>{i.title}</li>
            })}
            
        </ul>
    )
    
}

export default Accordion;