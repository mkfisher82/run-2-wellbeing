import React from 'react';
import styled from 'styled-components';
import gLink from 'gatsby-link';

const Container = styled.section`
  margin: 0px auto;
  max-width: 960px;
  padding: 40px 0;
`;
const Link = styled(gLink)`
  font-size: 1.5rem;
`;

const Heading = styled.h2`
  font-size: 3rem;
  color: #107a66;
`;

const Failure = () => (
  <Container>
    <Heading>Whoops</Heading>
    <p>Unfortunately signup was not successful. Please go back to the website and try again.</p>
    <p>If that doesn&apos;t work please use the contact form or send me an email at:</p>
    <p>
      <a href="mailto: nicole@run2wellbeing.co.nz">nicole@run2wellbeing.co.nz</a>
    </p>
    <p>Looking forward to working with you,</p>
    <p> Nicole</p>
    <Link to="/">Back to website</Link>
  </Container>
);

export default Failure;
