import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  box-sizing: border-box;
  border: 3px solid #e8e8e8;
  border-radius: 7px;
  display: block;
  padding: 24px;
  text-align: center;
  position: relative;
  background-color: white;

  &:hover {
    margin-top: -10px;
    border-width: 4px;
  }

  > ul {
    list-style: none;
    padding: 0;
    text-align: left;
    margin-top: 29px;
  }

  > hr {
    background-color: #107a66;
    border: none;
    height: 1px;
  }
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;

const Name = styled.div`
  color: #565656;
  font-weight: 300;
  font-size: 3rem;
  margin-top: -5px;
`;

const Price = styled.div`
  margin-top: 7px;
  font-size: 2.5rem;
  font-weight: bold;
`;

const Period = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 2px 21px 2px 21px;
  color: #33c4b6;
  border: 1px solid #e4e4e4;
  display: inline-block;
  border-radius: 15px;
  background-color: white;
  position: relative;
  bottom: -20px;
`;

const FAIcon = styled(FontAwesomeIcon)`
  padding: 0 20px 0 0;
  display: inline-block;
`;

const programme = props => {
  const features = props.features;
  const featureList = features.map(feature => (
    <ListItem key={feature.toString()}>
      <FAIcon size="lg" color="#107a66" icon={faCheck} />
      <p>{feature}</p>
    </ListItem>
  ));

  return (
    <label htmlFor={props.name}>
      <Wrapper>
        <Name>{props.name}</Name>
        <Price>{props.price}</Price>
        <Period>{props.period}</Period>
        <hr />
        <ul>{featureList}</ul>
        <input type="radio" id={props.name} name="package" value={props.name} checked={props.checked} />
      </Wrapper>
    </label>
  );
};

export default programme;
