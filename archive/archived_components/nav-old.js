import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1170px;
  margin: 0px auto;
  padding: 20px 0;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-self: left;
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

const MenuButton = styled.button`
  max-width: 60px;
  margin: 0px;
  padding: 0px;
`;

const NavButton = ({ target, name }) => <Button to={target}>{name}</Button>;

const NavOpened = ({ toggleMethod }) => {
  return (
    <NavContainer>
      <MenuButton type="button" onClick={toggleMethod}>
        Menu
      </MenuButton>
      <ButtonGroup>
        <NavButton target="#programme" name="Programme" />
        <NavButton target="#pricing" name="Pricing" />
        <NavButton target="/resources" name="Resources" />
        <NavButton target="#about" name="About" />
        <NavButton target="#contact" name="Contact" />
      </ButtonGroup>
    </NavContainer>
  );
};

const NavClosed = ({ toggleMethod }) => {
  return (
    <NavContainer>
      <MenuButton type="button" onClick={toggleMethod}>
        Menu
      </MenuButton>
    </NavContainer>
  );
};

class Nav extends Component {
  state = {
    menuOpen: false,
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <div>
        {menuOpen ? <NavOpened toggleMethod={this.toggleMenu} /> : <NavClosed toggleMethod={this.toggleMenu} />}
      </div>
    );
  }
}

export default Nav;
