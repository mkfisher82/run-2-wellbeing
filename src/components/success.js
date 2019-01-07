import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.section`
  margin: 0px auto;
  max-width: 960px;
  padding: 0;
`;
const LinkStyled = styled(Link)`
  font-size: 1.5rem;
`;

const Heading = styled.h2`
  color: #107a66;
`;

const Success = () => (
  <Container>
    <Heading>Congratulations</Heading>
    <h3>You&apos;re making a positive step towards better physical and mental health.</h3>
    <p>I&apos;m looking forward to meeting you and beginning our work together.</p>
    <p>
      In the meantime, please complete our{' '}
      <LinkStyled to="/client/#agreement">Client Details &amp; Agreement</LinkStyled> below because we will need that
      filled out before we get going
    </p>
    <p>
      Once I receive the completed agreement I&apos;ll be in contact to arrange a time for our initial skype
      consultation.
    </p>
    <p>Looking forward to getting started,</p>
    <p> Nicole</p>
  </Container>
);

export default Success;
