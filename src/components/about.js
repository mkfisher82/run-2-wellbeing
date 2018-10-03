import React from 'react';
import styled from 'styled-components';
import NicoleImgLarge from './nicoleImgLarge';
import SectionTitle from './sectionTitle';

const Wrapper = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 0 5%;
`;

const Container = styled.section`
  position: relative;
  width: 100%;
  padding: 40px 0;

  &:after {
    content: '';
    display: block;
    background-color: #107a66;
    top: 0;
    left: 0;
    opacity: 0.4;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
  }
`;

const Content = styled.div`
  padding: 10px 10px;
  margin-bottom: 0px;
`;

const aboutNicole = () => (
  <Container>
    <Wrapper>
      <SectionTitle title="About" />

      <NicoleImgLarge />
      <Content>
        <p>
          <strong>Nicole Sattler, Running coach, BSW, MSW and avid runner</strong>
        </p>
        <p>
          Nicole graduated from The University of Newcastle, Australia with a Bachelor of Social Work degree in 2007.
          Since then Nicole has worked in various counselling roles, largely with people experiencing a wide range of
          mental health issues, as well as working extensively with survivors of trauma. In 2014 Nicole obtained a
          Masters of Social Work postgraduate degree from Monash University.
        </p>
        <p>
          Nicole has been an enthusiastic and passionate runner for over ten years. In that time she has completed too
          many half marathons to count, 4 marathons and one ultra marathon. One day she would love to run the length of
          Aotearoa New Zealand. Nicole is an accredited running coach and loves to share her passion for the sport with
          her clients.
        </p>
        <p>
          Nicole lives in sunny Hawke’s Bay, NZ with her husband and business partner, Mark (also an avid runner!) and
          three wonderful children.
        </p>
      </Content>
    </Wrapper>
  </Container>
);

export default aboutNicole;
