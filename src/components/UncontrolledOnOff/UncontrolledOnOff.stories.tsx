import { action } from '@storybook/addon-actions';
import { UncontrolledOnOff } from './UncontrolledOnOff';

export default {
    component: UncontrolledOnOff,
};

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={action('clicked')} />
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={action('clicked')} />