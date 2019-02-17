import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';
import SectionTitle from './sectionTitle';
import Package from './package';
import SubscriptionCheckout from './subscriptionCheckout';
import OneOffCheckout from './oneOffCheckout';
import ChallengeCheckout from './challengeCheckout';

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px 0;

  &:after {
    content: '';
    display: block;
    background-color: #107a66;
    top: 0;
    left: 0;
    opacity: 0.4;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
  }
`;

const Button = styled.button`
  background-color: #107a66;
  opacity: 0.8;
  text-decoration: none;
  font-size: 1em;
  text-align: center;
  color: #fff;
  outline: none;
  padding: 12px 60px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  letter-spacing: 1.5px;
  display: block;
  margin: 5px auto;
`;

const Preamble = styled.p`
  /* font-size: 2rem; */
  text-align: center;
  padding: 10px 0;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
  margin: 0;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
`;

const Cell = styled.div`
  background-color: #ffffff;
  border: 3px solid #e8e8e8;
  border-radius: 7px;
`;

const pricing = () => (
  <Container>
    <Wrapper>
      <SectionTitle title="Pricing" />
      <Preamble>Select from one of our four great plans:</Preamble>
      <Grid>
        <Cell>
          <Package
            name="Starter"
            price="Free"
            discountPrice="Free"
            onSale={false}
            period="2 Weeks"
            features={[
              'Initial Skype Consulation (30mins)',
              '2 Week customised training programme',
              'Email and text message support',
              'Limit one per person',
            ]}
          />
          <Button onClick={() => (location.href = '/client')}>
            {' '}
            GET STARTED{' '}
          </Button>
        </Cell>
        <Cell>
          <Package
            name="Total Wellness"
            price="$280"
            discountPrice="$180"
            onSale={false}
            period="12 Weeks"
            features={[
              'Initial Skype Consulation (up to 90mins)',
              '3 x 4 Weekly customised training programme',
              'Skype review after every 4 week block to check you are on track ',
              'Unlimited email and text message support',
              'Access to the Run 2 Wellbeing closed Facebook support group',
            ]}
          />
          <OneOffCheckout />
        </Cell>
        <Cell>
          <Package
            name="Ongoing Wellness"
            price="$50"
            period="2 Weeks"
            features={[
              'All the features of our Total Wellness Package',
              'A new training programme sent to you every 2 weeks',
              'Small fortnightly payments',
              'Continue the program only for as long as you need to',
            ]}
          />
          <SubscriptionCheckout />
        </Cell>
        <Cell>
          <Package
            name="Mental Health Challenge"
            price="$30"
            period="30 Days"
            features={[
              'Email based, entirely online',
              'Exclusively offered to clients currently under the care of a mental health professional',
              'Learn to use running as a part of your mental health treatment plan',
            ]}
          />
          <ChallengeCheckout />
        </Cell>
      </Grid>
    </Wrapper>
  </Container>
);

export default pricing;
