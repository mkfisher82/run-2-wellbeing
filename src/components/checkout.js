import React from "react"
import { noAuto } from "@fortawesome/fontawesome-svg-core";
import styled from 'styled-components';

// hardcoded amount (in US cents) to charge users
// you could set this variable dynamically to charge different amounts
const amount = 18000

const Button = styled.button`
  font-size: 1.25em;
  text-align: center;
  color: #fff;
  outline: none;
  padding: 12px 60px;
  box-shadow: 2px 5px 10px rgba(0,0,0,.1);
  background-color: #107a66;
  border-radius: 6px;
  letter-spacing: 1.5px;
  margin: 0 auto;
  display: block;
`

const Container = styled.div`
  margin: 20px auto;
`

// Below is where the checkout component is defined.
// It has several functions and some default state variables.
const Checkout = class extends React.Component {
  state = {
    disabled: false,
    buttonText: "BUY NOW",
    paymentMessage: "",
  }

  resetButton() {
    this.setState({ disabled: false, buttonText: "BUY NOW" })
  }

  componentDidMount() {
    this.stripeHandler = window.StripeCheckout.configure({
      // You’ll need to add your own Stripe public key to the `checkout.js` file.
      // key: 'pk_test_STRIPE_PUBLISHABLE_KEY',
      key: "pk_test_zUnLJRPWqAc3PC3hfbRiHRrX",
      closed: () => {
        this.resetButton()
      },
    })
  }

  openStripeCheckout(event) {
    event.preventDefault()
    this.setState({ disabled: true, buttonText: "WAITING..." })
    this.stripeHandler.open({
      name: "Run 2 Wellbeing",
      amount: amount,
      description: "Total Wellness Package",
      token: token => {
        fetch(`.netlify/functions/checkout`, {
          method: "POST",
          mode: 'no-cors',
          body: JSON.stringify({
            token,
            amount,
          }),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        })
          .then(res => {
            console.log("Transaction processed successfully")
            this.resetButton()
            location.href='/client'
            // this.setState({ paymentMessage: "Payment Successful!" })
            // return res
          })
          .catch(error => {
            console.error("Error:", error)
            this.setState({ paymentMessage: "Payment Failed" })
          })
      },
    })
  }

  render() {
    return (
      <Container>
        <Button
          onClick={event => this.openStripeCheckout(event)}
          disabled={this.state.disabled}
        >
          {this.state.buttonText}
        </Button>
        {this.state.paymentMessage}
      </Container>
    )
  }
}

export default Checkout