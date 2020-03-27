/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

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

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.

  componentDidMount() {
    this.stripe = window.Stripe(
      'pk_test_zUnLJRPWqAc3PC3hfbRiHRrX',
      //'pk_live_rt726IttwFKmfmTFfmTSSh8e',
    );
  }

  async redirectToCheckout(event, sku, plan) {
    event.preventDefault();
    let item = {};

    if (!sku) {
      item = { plan: `${plan}`, quantity: 1 };
    } else {
      item = { sku: `${sku}`, quantity: 1 };
    }

    const { error } = await this.stripe.redirectToCheckout({
      items: [item],
      successUrl: `https://www.run2wellbeing.co.nz/client/`,
      cancelUrl: `https://www.run2wellbeing.co.nz`,
    });

    if (error) {
      console.warn('Error:', error);
    }
  }

  render() {
    const { sku, plan } = this.props;

    return (
      <Button
        type="button"
        // style={buttonStyles}
        onClick={event => this.redirectToCheckout(event, sku, plan)}
      >
        BUY NOW
      </Button>
    );
  }
};

export default Checkout;
