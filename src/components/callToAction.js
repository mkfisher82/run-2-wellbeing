import React from 'react';
import {Link} from 'gatsby';
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

const Button = styled.button`
    background-color: #107a66;
    text-decoration: none;
    font-size: 1.75em;
    text-align: center;
    color: #fff;
    outline: none;
    padding: 12px 60px;
    box-shadow: 2px 5px 10px rgba(0,0,0,.1);
    border-radius: 6px;
    letter-spacing: 1.5px;
    display: block;
    margin: 20px auto;
`;

const callToAction = () => {
  return (
    <Container>
      <Wrapper>
        <Text> Get started for free today!</Text>
        <Button onClick={() => location.href='https://www.run2wellbeing.co.nz/#pricing'}> Go To Pricing </Button>
      </Wrapper>
    </Container>
  );
};

export default callToAction;
