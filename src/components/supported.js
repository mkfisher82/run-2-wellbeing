import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/sectionTitle';
import image from '../images/jeremy-lapak-553145-unsplash-cropped.jpg';

const Container = styled.section`
  position: relative;

  &:after {
    content: '';
    display: block;
    background-image: url(${image});
    background-size: cover;
    top: 0;
    left: 0;
    opacity: 0.4;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
  }
`;

const Wrapper = styled.div`
  padding: 40px;
  max-width: 960px;
  margin: 0 auto;
`;

const supported = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle title="Evidence Based" />
        <p>
          The scientific literature surrounding the treatment of mental health issues consistently reveals exercise to
          be an effective form of treatment. Our programme draws on the latest research to help educate you about the
          most effective ways to manage your mental health using running as a tool.
        </p>
      </Wrapper>
    </Container>
  );
};

export default supported;
