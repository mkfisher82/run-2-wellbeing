import React from 'react';
import styled from 'styled-components';

const Title = styled.a`
  text-transform: uppercase;
  text-align: left;
  font-weight: 700;
  padding: 5px 0px;
`;

const Container = styled.div`
  padding: 10px 5%;
`;

const resource = ({ link, title, desc }) => {
  return (
    <Container>
      <h3>
        <Title href={link} target="_blank">
          {title}
        </Title>
      </h3>
      <p> {desc} </p>
    </Container>
  );
};

export default resource;
