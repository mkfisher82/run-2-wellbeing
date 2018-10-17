import React from 'react';
import styled from 'styled-components';
import SectionTitle from './sectionTitle';
import Package from './package';

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px 0;

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

const Input = styled.input`
  width: 500px;
  font-size: 1.5rem;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1.5rem;
  margin-left: 20px;
  background-color: #107a66;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  color: white;
`;

const Email = styled.div`
  text-align: center;
  padding: 40px 0;
`;

const Preamble = styled.p`
  font-size: 2rem;
  text-align: center;
  padding: 20px 0;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
`;

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 5%;
`;

const pricing = () => (
  <Container>
    <Wrapper>
      <SectionTitle title="Pricing" />
      <Preamble>Select a plan and enter your email to get started:</Preamble>
      <form action="/.netlify/functions/sendEmail" method="POST">
        <Grid>
          <Package
            name="Starter"
            price="Free"
            period="2 Weeks"
            features={[
              'Initial Skype Consulation (30mins)',
              '2 Week customised training programme',
              'Email and text message support',
              'Access to the Run 2 Wellbeing Facebook group',
            ]}
          />
          <Package
            name="Total Wellness"
            price="$280"
            period="12 Weeks"
            features={[
              'Initial Skype Consulation (up to 90mins)',
              '3 x 4 Weekly customised training programme',
              'Skype review after every 4 week block to check you are on track ',
              'Unlimited email and text message support',
              'Access to both the Run 2 Wellbeing Facebook group and the closed support group',
            ]}
          />
        </Grid>
        <Email>
          <Input type="email" placeholder="someone@example.com" name="email" id="to" />
          <Button type="submit">Let&apos;s do it!</Button>
        </Email>
      </form>
    </Wrapper>
  </Container>
);

export default pricing;
