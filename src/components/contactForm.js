import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px;
`;

const HoneyPot = styled.p`
  display: none;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  width: 95%;
`;

const Textarea = styled.textarea`
  width: 95%;
`;

const Button = styled.button`
  background-color: #107a66;
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
`;

const contactForm = () => {
  return (
    <Container>
      <form
        name="contact"
        method="POST"
        action="/.netlify/functions/sendContactForm"
        netlify-honeypot="bot-field"
        netlify="true"
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
          <Button type="submit">Send</Button>
        </p>
      </form>
    </Container>
  );
};

export default contactForm;
