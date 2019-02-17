import React from 'react';
// import { noAuto } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';

// hardcoded amount (in US cents) to charge users
// you could set this variable dynamically to charge different amounts
const amount = 28000;

const Button = styled.button`
  font-size: 1.25em;
  text-align: center;
  color: #fff;
  outline: none;
  padding: 12px 60px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  background-color: #107a66;
  border-radius: 6px;
  letter-spacing: 1.5px;
  margin: 10px auto;
  display: block;
`;

const Container = styled.div`
  margin: 0px auto;
`;

// Below is where the checkout component is defined.
// It has several functions and some default state variables.
const Checkout = class extends React.Component {
  state = {
    disabled: false,
    buttonText: 'BUY NOW',
    paymentMessage: '',
  };

  componentDidMount() {
    this.stripeHandler = window.StripeCheckout.configure({
      // You’ll need to add your own Stripe public key to the `checkout.js` file.
      // key: 'pk_test_zUnLJRPWqAc3PC3hfbRiHRrX',
      key: 'pk_live_rt726IttwFKmfmTFfmTSSh8e',
      closed: () => {
        this.resetButton();
      },
    });
  }

  resetButton() {
    this.setState({ disabled: false, buttonText: 'BUY NOW' });
  }

  openStripeCheckout(event) {
    event.preventDefault();
    this.setState({ disabled: true, buttonText: 'WAITING...' });
    this.stripeHandler.open({
      name: 'Run 2 Wellbeing',
      amount,
      description: 'Total Wellness Package',
      token: token => {
        fetch(`.netlify/functions/oneOffCheckout`, {
          // fetch(`http://localhost:9000/oneOffCheckout.js`, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({
            token,
            amount,
          }),
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
        })
          .then(() => {
            console.log('Transaction processed successfully');
            this.resetButton();
            location.href = '/client';
            // this.setState({ paymentMessage: "Payment Successful!" })
            // return res
          })
          .catch(error => {
            console.error('Error:', error);
            this.setState({ paymentMessage: 'Payment Failed' });
          });
      },
    });
  }

  render() {
    const { disabled, buttonText, paymentMessage } = this.state;

    return (
      <Container>
        <Button
          onClick={event => this.openStripeCheckout(event)}
          disabled={disabled}
        >
          {buttonText}
        </Button>
        {paymentMessage}
      </Container>
    );
  }
};

export default Checkout;
