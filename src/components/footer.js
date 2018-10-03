import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  text-align: center;
  background-color: lightgray;
  margin-top: 20px;
  margin-bottom: 0px;
`;

const FooterText = styled.p`
  padding: 10px;
  margin: 0px;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>
      Copyright <strong>Run 2 Wellbeing</strong> 2018
    </FooterText>
  </FooterContainer>
);

export default Footer;
