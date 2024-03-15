import * as React from 'react';
import { Select }  from './Select';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

export default {
    component: Select,
};

const items = [
    { title: 'Dimych', value: 1 },
    { title: 'Valera', value: 2 },
    { title: 'Artem', value: 3 },
    { title: 'Viktor', value: 4 }
]

export const WithValue = () => {
    const [value, setValue] = useState(2)

    return (
        <Select
            onChange={setValue}
            value={value}
            items={items}
        />
    );
};

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return (
        <Select
            value={value}
            onChange={setValue}
            items={items}
        />
    );
};