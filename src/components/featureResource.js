import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  padding: 10px 5%;
  margin: 0;
`;

const Title = styled.a`
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  padding: 10px 0px;
`;

const FeatureImg = styled.img`
  max-width: 100%;
`;

const Feature = styled.h3`
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  padding: 10px 0px;
`;
const Wrapper = styled.div`
  border: 1px solid #333;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  background-color: #fff;
  border-radius: 6px;
  margin: 20px 0px;
`;

const resource = ({ link, image, title, desc }) => {
  return (
    <Wrapper>
      <Feature>This week&apos;s feature resource </Feature>
      <Container>
        <a href={link}>
          <FeatureImg src={image} alt="Feature resource image" />
        </a>
        <div>
          <h3>
            <Title href={link} target="_blank">
              {title}
            </Title>
          </h3>
          <p> {desc} </p>
        </div>
      </Container>
    </Wrapper>
  );
};

export default resource;
