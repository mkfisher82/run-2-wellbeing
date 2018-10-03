import React from 'react';
import styled from 'styled-components';
import AccordionItem from './accordionItem';

const Container = styled.div`
  /* padding: 40px 0; */
`;

const Accordion = props => {
  return (
    <Container>
      {props.questions.map(function(question) {
        return <AccordionItem key={question.summary} details={question} />;
      })}
    </Container>
  );
};

export default Accordion;
