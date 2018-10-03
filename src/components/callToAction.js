import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  position: relative;
  width: 100%;
  margin: 0;
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

const Wrapper = styled.div`
  padding: 0 5%;
`;

const Text = styled.h4`
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  padding: 20px 0;
  color: #fff;
  margin: 0;
`;

const Form = styled.form`
  text-align: center;
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

const callToAction = () => {
  return (
    <Container>
      <Wrapper>
        <Text> Start a free trial today!</Text>
        <Form name="callToAction" method="POST" action="/.netlify/functions/sendEmail">
          <Input type="email" name="email" id="email" placeholder="someone@example.com" />
          <Button type="submit">Sign Up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default callToAction;
