import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import ClientAgreement from '../components/clientAgreement';
import Success from '../components/success';

const Container = styled.div`
  max-width: 960px;
  padding: 0 5%;
  margin: 0 auto;
`;

const LinkStyled = styled(Link)`
  font-size: 1.5em;
`
export default function About() {
  return (
    <Layout>
    <Container>
      <Success />
      <ClientAgreement/>
      <LinkStyled to="/">Back to website</LinkStyled>
    </Container>
    </Layout>
  );
}
