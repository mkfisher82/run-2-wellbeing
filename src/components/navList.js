import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavContainer = styled.ul`
  border-radius: 4px;
  padding: 0 20px;
  margin: 0;
  display: ${props => (props.menuOpen ? 'block' : 'none')};
  grid-area: navlist;

  > a {
    text-decoration: none;
  }

  > li {
    font-size: 20px;
    padding: 5px;
    list-style: none;
    border-bottom: 1px solid #107a66;
    color: #107a66;
    &:hover {
      color: #000;
    }
  }

  @media (min-width: 540px) {
    background: none;
    border-bottom: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    > li {
      display: inline;
      border-bottom: none;
    }
  }
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

const NavList = ({ menuOpen }) => {
  return (
    <NavContainer menuOpen={menuOpen}>
      <li>
        <Button to="#programme">Programme</Button>
      </li>
      <li>
        <Button to="#pricing">Pricing</Button>
      </li>
      <li>
        <Button to="/resources">Resources</Button>
      </li>
      <li>
        <Button to="#about">About</Button>
      </li>
      <li>
        <Button to="#contact">Contact</Button>
      </li>
    </NavContainer>
  );
};

export default NavList;
