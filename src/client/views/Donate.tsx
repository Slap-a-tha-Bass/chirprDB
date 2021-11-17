import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { DonateProps } from '../../types';

const Donate = () => {

    const stripe = useStripe();
    const elements = useElements();

    const [fullName, setFullName] = useState<DonateProps['fullName']>('');
    const [amount, setAmount] = useState<DonateProps['amount']>(5);

    const handleSubmitPayment = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const cardData = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardData
        });

        if (error) {
            console.log(error);
        } else {
            const res = await fetch('/api/donate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount, paymentMethod })
            });
            const successfulPayment = await res.json();
            console.log(successfulPayment);
        }

    }

    return (
        <>
            <div className="container">
                <div className="col-md-6">
                    <h3 className="text-primary text-center mt-2">Donate</h3>
                    <form className="form-group bg-primary border rounded mt-3 p-3">
                        <label className="text-light" placeholder="As it appears on CC">Full Name</label>
                        <input type="text" className="form-control" value={fullName} onChange={e => setFullName(e.target.value)} />
                        <label className="text-light">Donation amount ($USD)</label>
                        <input type="text" className="form-control" value={Number(amount)} onChange={e => setAmount(Number(e.target.value))} />
                        <CardElement className="form-control mt-2" />
                        <div className="d-flex justify-content-end mt-2">
                            <button className="btn btn-outline-light" onClick={handleSubmitPayment}>Submit Payment</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Donate;
