import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
`;

const sectionTitle = props => {
  return <Title> {props.title}</Title>;
};

export default sectionTitle;
