import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1170px;
  max-height: 100px;
  margin: 0px auto;
  padding: 20px 0;
`;

const ButtonGroup = styled.div`
  justify-self: center;
  align-self: center;
`;

const Button = styled(Link)`
  margin: 2px;
  padding: 5px;
  font-size: 1rem;

  @media screen and (min-width: 850px) {
    margin: 5px;
    padding: 8px;
    font-size: 2rem;
  }
`;

const NavButton = props => <Button to={props.target}>{props.name}</Button>;

const Nav = () => (
  <NavContainer>
    <ButtonGroup>
      <NavButton target="#programme" name="Programme" />
      <NavButton target="#pricing" name="Pricing" />
      <NavButton target="/resources" name="Resources" />
      <NavButton target="#about" name="About" />
      <NavButton target="#contact" name="Contact" />
    </ButtonGroup>
  </NavContainer>
);

export default Nav;
