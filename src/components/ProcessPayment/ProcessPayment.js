import React from 'react';
            

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IeAENH4baMZ3UfPXOLwjG0TtUnfAxIKUGBolyU0MQP6tTGbpTL1hefF71TvXsdpGOZ2dsIjVGNBCz2EU4G1no7n002Ug3pVtE');

const ProcessPayment = ({userInfo,price}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm price={price} userInfo={userInfo}></SimpleCardForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;