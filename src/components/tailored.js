import React from 'react';
import styled from 'styled-components';

import Title from './sectionTitle';
import SubSection from './subSection';

const Container = styled.section`
  margin: 0px auto;
  max-width: 960px;
  padding: 40px 5%;
`;

const HighlightText = styled.p`
  color: #107a66;
  font-size: 1.25rem;
  font-weight: 700;
`;

const SubSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 850px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const tailored = () => {
  return (
    <Container>
      <Title title="Tailored to you" />
      <p>Through support, guidance and programme design that draws on your unique circumstances</p>
      <HighlightText>A one-size-fits-all &quot;Couch to 5k&quot; programme this is not</HighlightText>
      <SubSectionContainer>
        <SubSection
          subHeading="Assess"
          subText="We will assess your current fitness level, help you with goal setting around your mental health and well-being as well as fitness and running."
        />
        <SubSection
          subHeading="Teach"
          subText="We will teach you to  reflect on your running, lifestyle, relationships and overall well-being in order to keep you running and living as healthfully as you can."
        />
        <SubSection
          subHeading="Support"
          subText="With our support you can avoid the vicious cycle that so many runners face: the “I’m feeling too down to run” trap."
        />
      </SubSectionContainer>
    </Container>
  );
};

export default tailored;
