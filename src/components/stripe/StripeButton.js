import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

//Stripe wants all the prices in cents

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_live_Mp4n7i3u3P5U4gMA1XvnE1qn'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey = {publishKey}
        />
    );
};

export default StripeCheckoutButton;