import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/contactForm';
import ContactDetails from '../components/contactDetails';
import SectionTitle from '../components/sectionTitle';

const Container = styled.section`
  margin: 0px auto;
  max-width: 960px;
  padding: 40px 5%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const contact = () => {
  return (
    <Container>
      <SectionTitle title="Contact" />
      <p>
        I&apos;d would love to hear from you and discuss how Run 2 Wellbeing can make you feel the best you&apos;ve ever
        felt!
      </p>
      <Grid>
        <ContactDetails />
        <ContactForm />
      </Grid>
    </Container>
  );
};

export default contact;
