import React, { useEffect, useState } from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const SimpleCardForm = ({userInfo,price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError,setPaymentError] = useState(null)
  const [paymentSuccess,setPaymentSuccess] = useState(null)
  const [paymentData,setPaymentData] = useState({});
  
  const handleSubmit = async (event) => {
    // Block native form submission.
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
      setPaymentError(error.message)
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess(paymentMethod.id)
      setPaymentError(null)
      setPaymentData(userInfo)
    }

        fetch('http://localhost:5000/addPayment',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <br/>
        <h5>$ {price}</h5>
        <button className="btn btn-primary" type="submit" disabled={!stripe}>
          Pay
        </button> <br/>
      </form>
      {
        paymentError && <p className="text-danger">{paymentError}</p>
      }{
        paymentSuccess && <p className="text-danger">Please Click One More</p>
      }
    </div>
  );
};

export default SimpleCardForm;