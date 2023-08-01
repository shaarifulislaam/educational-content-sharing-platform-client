import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const SimpleCardForm = ({handlePayment}) => {
  const [paymentError,setPaymentError]=useState(null)
  const [paymentSuccess,setPaymentSuccess]=useState(null)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    if (!stripe || !elements) {
     
      return;
    }

  
    const cardElement = elements.getElement(CardElement);

   
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod.id);
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <CardElement />
     <br/>
      <button className='btn-custom' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {
paymentError && <p style={{color: 'red'}}>{paymentError}</p>
    }
    { 
    paymentSuccess && <p style={{color: 'green'}}>Your payment Success Fully Complete</p>
    }
    </div>
  );
};
export default SimpleCardForm;