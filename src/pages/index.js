import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout'
import About from '../components/about';
import Nav from '../components/nav';
import CTA from '../components/callToAction';
import Tailored from '../components/tailored';
import Contact from '../components/contact';
import Already from '../components/already';
import Supported from '../components/supported';
import Pricing from '../components/pricing';
import FAQ from '../components/faq';

import MountainRunner from '../images/kalen-emsley-99660-unsplash-c_scale,w_1920.jpeg';

const Body = styled.div`
  display: grid;
`;

const MainImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  justify-self: center;
  object-fit: cover;
  margin-top: 16px;
`;

const UseRunning = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin: 0px auto;
  max-width: 960px;
  padding: 40px 5%;
`;

export default function Index() {
  return (
    <Layout>
    <Body>
      <Nav />

      <MainImage src={MountainRunner} alt="Woman running in the mountains at sunrise" width="1920" height="700" />

      <UseRunning>Using running to build mental health and wellbeing</UseRunning>

      <CTA />

      <section id="programme">
        <Tailored />
        <Supported />
        <Already />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </Body>


    </Layout>
  );
}
