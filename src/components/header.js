import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import FacebookIFrame from './facebookIFrame';

import logo from '../images/run-2-well-being-logo-v3.svg';

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  margin: 0px auto;
  padding: 40px 5% 20px 5%;

  @media screen and (min-width: 850px) {
    grid-template-columns: 1fr auto;
    padding: 10px 5% 0px 5%;
    justify-items: initial;
  }
`;

const SiteLogo = styled.img`
  padding: 5px;
  max-width: 100%;
    margin: 0px;
  
  @media screen and (min-width: 850px) {
  max-height: 50px;
  }
`;

const Header = () => (
  <HeaderContainer>
    {/* <Link to="/">
      <SiteLogo src={logo} alt="Run 2 Well-being Logo" />
    </Link>
    <FacebookIFrame /> */}
  </HeaderContainer>
);

export default Header;
