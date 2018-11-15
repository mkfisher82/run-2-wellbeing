import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
  padding: 10px 5%;
`

const Title = styled.a`
  font-size: 1.5em;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  padding: 10px 0px;
`;

const FeatureImg = styled.img`
  display: block;
  max-width: 100%;
`

const Feature = styled.h3`
  text-transform: uppercase;
  font-size: 2em;
  text-align: center;
  font-weight: 700;
  padding: 10px 0px;
`
const Wrapper = styled.div`
  border: 1px solid #333;
  box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
  background-color: #fff;
  border-radius: 6px;
  margin: 20px 0px;
  padding-bottom: 20px;
`

const resource = props => {
  console.log(props.link);

  return (
    <Wrapper>
      <Feature>This week's feature resource </Feature>
      <Container>
        <a href={props.link }><FeatureImg src={props.image} width="100%" alt="Feature resource image" /></a>
        <div>
            <Title href={props.link} target="_blank"> {props.title} </Title>
            <p> { props.desc } </p>
        </div>
      </Container>

    </Wrapper>

  );
};

export default resource;
