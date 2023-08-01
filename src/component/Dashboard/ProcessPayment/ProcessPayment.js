import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie2SVJchZ0B3gZrImWybLYhfiBy6hxHrKNSL8hmJ1kRwj68fr72hWZsu1E9AEQ8Vh5bGh8CsEtwDDfnt60CEbLs00P4nHDVL1');
const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            
         
         <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
    </Elements>
    );
};

export default ProcessPayment;