import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
`;

const HoneyPot = styled.p`
  display: none;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  width: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
`;

const contactForm = () => {
  return (
    <Container>
      <form
        name="contact"
        method="POST"
        action="/.netlify/functions/sendContactForm"
        netlify-honeypot="bot-field"
        netlify
      >
        <HoneyPot>
          <Label htmlFor="contact-bot-field">Don’t fill this out if you%apos;re human:</Label>
          <Input name="bot-field" id="contact-bot-field" />
        </HoneyPot>
        <p>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" name="name" id="name" />
        </p>
        <p>
          <Label htmlFor="email">Email:</Label>
          <Input type="text" name="email" id="email" />
        </p>
        <p>
          <Label htmlFor="message">Message:</Label>
          <Textarea name="message" id="message" cols={30} rows={10} />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Container>
  );
};

export default contactForm;
