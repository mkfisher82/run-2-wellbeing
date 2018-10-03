import React from 'react';
import styled from 'styled-components';
import SectionTitle from './sectionTitle';
import Accordion from './accordion';

const Container = styled.section`
  max-width: 960px;
  margin: 0px auto;
  padding: 40px 5%;
`;

const FAQ = () => (
  <Container>
    <SectionTitle title="Frequently Asked Questions" />
    <Accordion questions={questions} />
  </Container>
);

export default FAQ;

const questions = [
  {
    summary: 'I haven’t been diagnosed with a mental illness. Is this programme still suitable for me?',
    answer:
      'Absolutely! Our programme utilises the well known benefits of running and increased physical activity to promote mental health and general well-being. It is suitable for anyone who would like to use running as a tool to improve their overall quality and enjoyment of life.',
  },
  {
    summary:
      'I have been diagnosed with a mental illness and I’m under the care of health professionals. Is this programme still suitable for me?',
    answer:
      'Absolutely! Exercise has consistently been found to be an effective means of managing mental health. In fact, health professionals may have even mentioned this to you at some stage. Run 2 Well-being is not designed to take the place of your current health provider, rather we hope to give you some additional tools while you still access the care and expertise of your current healthcare providers.',
  },
  {
    summary:
      'I have experienced mental health episodes in the past and I use running as a tool to maintain my mental health and well-being. What can your programme offer me?',
    answer:
      'As a social worker and a runner, I have seen first-hand the negative feedback loop that occurs all too often amongst runners struggling to maintain their mental health and well-being. The “too down to run, not running so feeling down” trap. We can help you out with programme design, support, guidance and accountability to make sure that your running remains a useful tool rather than a source of additional stress or something that gets forgotten in tough times.',
  },
  {
    summary: 'Why do I need your programme, can’t I just lace up and go for a run?',
    answer:
      'Sure you can! Our programme is a tool designed to help you maximise the benefits of running for your mental health and wellbeing. In order to do so, we combine the latest mental health research, running programme design, education, support and accountability. Research has shown that exercise has the greatest impact as a treatment for depression and anxiety when it is supported by health professionals rather than self directed. ',
  },
  {
    summary: 'How long will I need the Run 2 Well-being programme for?',
    answer:
      'Our programme is 12 weeks  in duration after which time you may have acquired the confidence, knowledge and experience to continue to use your running as an effective wellbeing tool. Some clients like to come back to us periodically for a “tune up” so to speak, or during those times when maintaining their mental health and wellbeing is not so easy.  Others enjoy the benefits of year round coaching, support and accountability. There is no right or wrong way!',
  },
];
