import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from '../images/run-2-well-being-logo-v3.svg';
import Bars from '../images/bars-solid.svg';
import FB from './facebookIFrame';
import NavList from './navList';

const SiteLogo = styled.img`
  padding: 5px 0;
  margin: 0px;
  max-height: 50px;
  grid-area: logo;
  max-width: 100%;
`;

const NavLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px;
  padding: 20px 5% 0px 5%;
  margin: 0 auto;
  align-items: center;
  grid-gap: 10px 20px;
  max-width: 1080px;
  grid-template-areas:
    'logo menu'
    'navlist navlist'
    'FB FB';

  @media (min-width: 540px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 20px;
    grid-template-areas:
      'logo FB'
      'navlist navlist';
  }
`;

const Button = styled.button`
  background: #ffffff;
  font-size: 20px;
  padding: 5px;
  border-radius: 4px;
  grid-area: menu;

  @media (min-width: 540px) {
    display: none;
  }
`;

class Nav extends Component {
  state = {
    menuOpen: false,
  };

  toggleMenu = () => {
    this.setState(({ menuOpen }) => {
      return { menuOpen: !menuOpen };
    });
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <NavLayout>
        <SiteLogo src={Logo} alt="Run 2 Wellbeing Logo" />
        <Button onClick={this.toggleMenu}>
          <img src={Bars} width="20px" height="20px" alt="Menu" />
        </Button>
        <NavList menuOpen={menuOpen} />
        <FB />
      </NavLayout>
    );
  }
}

export default Nav;
