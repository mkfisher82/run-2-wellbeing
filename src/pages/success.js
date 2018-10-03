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

const Success = () => (
  <Container>
    <Heading>Success</Heading>
    <p>By signing up you’ve already made a positive step towards better physical and mental health.</p>
    <p>
      I&apos;m looking forward to meeting you and beginning our work together with a skype consultation. I&apos;ll be in
      contact shortly to arrange a time.
    </p>
    <p>
      In the meantime, head over to our <Link to="/client">Client Agreement</Link> because we will need that filled out
      before we get going
    </p>
    <p>Looking forward to getting started,</p>
    <p> Nicole</p>
    <Link to="/">Back to website</Link>
  </Container>
);

export default Success;
