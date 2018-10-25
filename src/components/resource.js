import React from 'react';
import styled from 'styled-components';

const Title = styled.a`
  font-size: 1.25em;
  text-transform: uppercase;
  text-align: left;
  font-weight: 700;
  padding: 5px 0px;
`;

const Container = styled.div`
    padding: 10px 5%;
`

const resource = props => {
  return (
    <Container>
        <Title href={ props.link } target="_blank"> {props.title} </Title>
        <p> { props.desc } </p>
    </Container>
  );
};

export default resource;
