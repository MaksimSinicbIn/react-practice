import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Rating, RatingValueType } from './Rating';

export default {
    component: Rating,
};

export const EmptyRating = () => <Rating value={0} onClick={ () => {}} />;
export const Rating1 = () => <Rating value={1} onClick={ () => {}} />;
export const Rating2 = () => <Rating value={2} onClick={ () => {}} />;
export const Rating3 = () => <Rating value={3} onClick={ () => {}} />;
export const Rating4 = () => <Rating value={4} onClick={ () => {}} />;
export const Rating5 = () => <Rating value={5} onClick={ () => {}} />;

export const ModeChanging = () => { 
    const [value, setValue] = useState<RatingValueType>(3)
    return <Rating value={value} onClick={setValue} />
};
