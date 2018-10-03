import React from 'react';
import styled from 'styled-components';

import logo from '../images/run-2-well-being-logo-v3.svg';

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  /* max-width: 1170px; */
  max-height: 100px;
  margin: 0px auto;
  padding: 20px 0 0px 5%;
`;

const SiteLogo = styled.img`
  padding: 5px;
  margin: 0px;
  max-height: 50px;
`;

const Header = () => (
  <HeaderContainer>
    <SiteLogo src={logo} alt="Run 2 Well-being Logo" />
  </HeaderContainer>
);

export default Header;
