import * as React from 'react';
import { useState } from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    items: ItemType[]
    onChange: (value: any) => void
    onClick: () => void
};

export const Select = (props: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(false)
    const currentValue = props.items.find( i => i.value === props.value)?.title
    const itemsRender = props.items.map(i => {
        const onClickItem = () => {
            props.onChange(i.value)
            setCollapsed(true)
        }
        return (
            <li 
                className={`${s.selectLi} ${s.hover}`}
                key={i.value}
                onClick={onClickItem}
            >
                {i.title}
            </li>
        )
    }
    )
    
    const onClickHandler = () => {
        setCollapsed(false)
    }

    return (
        <div className={s.selectWrapper}>
            <div className={s.valueSection} onClick={onClickHandler} onChange={props.onChange} >
            {currentValue ? currentValue : ''}
            </div>
            {
                !collapsed && (
                    <div>
                        <ul className={s.selectUl}>{itemsRender}</ul>
                    </div>
                )
            }
        </div>
    );
};