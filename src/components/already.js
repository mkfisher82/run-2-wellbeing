import React from 'react';
import styled from 'styled-components';
import SectionTitle from './sectionTitle';
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

const Wrapper = styled.div`
  display: grid;

  @media (min-width: 850px) {
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
`;

const already = () => {
  return (
    <Container>
      <SectionTitle title="You don't need to be a runner already... But you can be!" />
      <p>
        Our programme is focused on you, the unique individual with all your strengths, talents, obstacles and
        commitments, we can work with all levels of fitness and running experience.{' '}
      </p>
      <HighlightText>
        Anyone (and we really mean anyone) can enjoy the mental and physical benefits of running.
      </HighlightText>

      <Wrapper>
        <SubSection
          subHeading="New to Running/Regular Exercise"
          subText="For the absolute novice we begin with walking and then progress to run/walking or fast paced moderate intensity walking if that is what suits your needs best."
        />
        <SubSection
          subHeading="Experienced Runners"
          subText="If you’re already a regular runner we will target your training around your goals, be it 5k, marathon or something beyond! But our real focus is on your mental health and well-being and making sure your programme fits with your health goals."
        />
      </Wrapper>
    </Container>
  );
};

export default already;
