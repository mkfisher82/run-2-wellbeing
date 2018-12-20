import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Nav from '../components/nav';
import SectionTitle from '../components/sectionTitle';
import Resource from '../components/resource';
import FeatureResource from '../components/featureResource';
import FeatureImg from '../images/running-mum-life.jpg';

const Container = styled.div`
  max-width: 960px;
  padding: 0 5%;
  margin: 0 auto;
`;

export default function About() {
  return (
    <Layout>
      <Nav />
      <Container>
        <SectionTitle title="Resources" />
        <p>
          Unsure about how the simple act of running might benefit your mental health and overall wellbeing? Check out
          these articles, videos and blog posts to learn more about the power of exercise to change your brain, your
          body and your life.
        </p>

        <FeatureResource
          link="/blog/running-mum-life"
          title="The Running Mum Life"
          desc="Here arer my tips for getting out there and running when you have a young family."
          image={FeatureImg}
        />

        {resources.map(({ link, title, desc }) => {
          return <Resource link={link} title={title} desc={desc} key={link} />;
        })}
      </Container>
    </Layout>
  );
}

const resources = [
  {
    link: 'https://www.apa.org/monitor/2011/12/exercise.aspx',
    title: 'ARTICLE: The Exercise Effect',
    desc:
      'If you are keen to know the mechanisms of why exercise is so good for your mental health - check out this article from the American Psychological Association.',
  },
  {
    link: 'https://www.mentalhealthexcellence.org/depression-anxiety-ocd-running-helped-us-beat/',
    title: 'ARTICLE: Depression, anxiety, OCD – running helped us beat them',
    desc: 'This article features real runners who use the sport to manage significant mental health issues.',
  },
  {
    link:
      'https://running.competitor.com/2015/10/trail-running/feeling-anxious-research-shows-trail-running-benefits-your-brain_138204',
    title: 'ARTICLE: Feeling Anxious? Research Shows Trail Running Benefits Your Brain',
    desc:
      'By now we know that physical exercise undoubtedly provides mental health benefits. But does it matter where the exercise takes place? This article discusses a study that showed trail running was as effective as Cognitive Behaviour Therapy in reducing symptoms of anxiety.',
  },
  {
    link: 'https://www.ted.com/talks/wendy_suzuki_the_brain_changing_benefits_of_exercise/up-next?language=en',
    title: 'VIDEO: The brain changing benefits of exercise',
    desc: 'An entertaining Ted Talk that details how exercise can actually change the structure of the brain.',
  },
  {
    link:
      'https://www.psychologytoday.com/us/blog/the-athletes-way/201810/aerobic-exercise-has-clinically-tested-antidepressant-powers',
    title: 'ARTICLE: Aerobic Exercise Has Clinically-Tested Antidepressant Powers',
    desc:
      'The author of “The Athlete’s way: Sweat and the Biology of Bliss” discusses his personal experience of the benefits of moderate-vigorous activity on his own mental health as well as a recent meta-analysis that supports this anecdotal data.',
  },
  {
    link: 'https://youtu.be/OK_vnVbxBXE',
    title: 'VIDEO: Dr Cullen Hardy',
    desc: 'An animated You Tube video that explains the mental health benefits of regular exercise.',
  },
  {
    link: 'https://youtu.be/Wto7zISB2d0',
    title: 'VIDEO: How exercise affects your body and mind',
    desc: 'This video provides information about the role of exercise in managing depression.',
  },
  {
    link:
      'https://www.psychologytoday.com/us/blog/what-works-and-why/201803/why-exercise-is-so-essential-mental-health',
    title: 'ARTICLE: Why exercise is so essential for mental health',
    desc: 'This article discusses how exercise can both treat and prevent mental health issues.',
  },
];
