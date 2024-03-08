import { action } from '@storybook/addon-actions';

import Accordion from './Accordion';
import { useState } from 'react';
import { idText } from 'typescript';

export default {
    component: Accordion,
};

// type Story = StoryObj<typeof Accordion>;

// export const FirstStory: Story = {
//     args: {
//         titleValue: 'Hello',
//         collapsed: true,
        
//     },
// }

const onChangeHandler = action('on Change')
const onClick = action('some item was clicked')

export const CollapsedAccordionMode = () => {
    return (
        <Accordion
            items={[]}
            titleValue={"Collapsed Accordion"}
            collapsed={true}
            onChange={onChangeHandler}
            onClick={ () => {}}
        />
    )
}

export const OpenedAccordionMode = () => {
    return (
        <Accordion
            items={[
                {title: 'Dimych', value: 1}, 
                {title: 'Valera', value: 2}, 
                {title: 'Artem', value: 3}, 
                {title: 'Viktor', value: 4} 
            ]}
            titleValue={"Opened Accordion"}
            collapsed={false}
            onChange={ () => {} }
            onClick={onClick}
        />
    )
}

export const ModeChanging = () => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <Accordion
            items={[
                {title: 'Dimych', value: 1}, 
                {title: 'Valera', value: 2}, 
                {title: 'Artem', value: 3}, 
                {title: 'Viktor', value: 4} 
            ]}
            titleValue={"Accordion"}
            collapsed={collapsed}
            onChange={ () => {
                setCollapsed(!collapsed)
            } }
            onClick={ (value) => {alert(`User with ID ${value} should be happy!`)}}
        />
    )
}