import { action } from '@storybook/addon-actions';

import Accordion from './Accordion';
import { useState } from 'react';

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

export const CollapsedAccordionMode = () => {
    return (
        <Accordion
            titleValue={"Collapsed Accordion"}
            collapsed={true}
            onChange={onChangeHandler}
        />
    )
}

export const OpenedAccordionMode = () => {
    return (
        <Accordion
            titleValue={"Opened Accordion"}
            collapsed={false}
            onChange={ () => {} }
        />
    )
}

export const ModeChanging = () => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <Accordion
            titleValue={"Accordion"}
            collapsed={collapsed}
            onChange={ () => {
                setCollapsed(!collapsed)
            } }
        />
    )
}