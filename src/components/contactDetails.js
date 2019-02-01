import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px;
`;

const contactDetails = () => {
  return (
    <Container>
      <p>
        <strong>Address:</strong>
      </p>
      <address>
        1/15 Moeller St
        <br />
        Taradale,
        <br />
        Napier, Hawkes Bay <br />
        New Zealand
        <br />
        4112
      </address>

      <p>
        <strong>Phone:</strong>
      </p>
      <p>
        <a href="tel:+64-204-063-6902">+64 204 063 6902</a>
      </p>
      <p>
        <strong>Email:</strong>
      </p>
      <p>
        <a href="mailto: nicole@run2wellbeing.co.nz">nicole@run2wellbeing.co.nz</a>
      </p>
    </Container>
  );
};

export default contactDetails;
