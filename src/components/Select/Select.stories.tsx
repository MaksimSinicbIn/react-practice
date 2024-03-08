import * as React from 'react';
import { Select }  from './Select';
import { FormEvent, useRef, useState } from 'react';

export default {
    component: Select,
};

const items = [
    { title: 'Dimych', value: 1 },
    { title: 'Valera', value: 2 },
    { title: 'Artem', value: 3 },
    { title: 'Viktor', value: 4 }
]

export const ModeChangeSelect = () => {
    const [currentValue, setCurrentValue] = useState<number | undefined>(1)
    const onChangeHandler = (v: number) => {
        setCurrentValue(v)
    }
    const onClickHandler = () => {
        setCurrentValue(currentValue)
    }

    return (
        <Select
            value={currentValue}
            items={items}
            onChange={onChangeHandler}
            onClick={onClickHandler}
        />
    );
};