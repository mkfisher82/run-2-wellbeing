import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import SectionTitle from '../../components/sectionTitle';
import Nav from '../../components/nav';

import BlogImg from '../../images/39Degrees.jpg';

const Container = styled.div`
  max-width: 960px;
  padding: 0 5%;
  margin: 0 auto;
`;

const Body = styled.p`
  font-size: 1.5rem;
`;

const BlogImage = styled.img`
  margin: 0px auto;
  display: block;
`;

export default function RunningMum() {
  return (
    <Layout>
      <Nav />
      <Container>
        <SectionTitle title="Don’t despair the tough runs" />
        <BlogImage
          src={BlogImg}
          width="100%"
          alt="Thermometer reading 39 degrees C."
        />
        <Body>
          It’s the height of summer so chances are you have encountered a few
          “tough runs” lately. Tough runs strike from nowhere, ready to dash
          your confidence and destroy your running enjoyment. Tough runs usually
          involve spending the entire run telling yourself that it would be ok
          to quit, that all your hard work has been a waste of time and,
          basically, you suck as a runner and probably a human being.
        </Body>
        <Body>
          Don’t despair! These tough runs, if only you can manage to adjust your
          self talk, are a wonderful opportunity to trust the process and
          practice surrendering to the feedback the feelings and sensations your
          body is gifting you. Ultimately, it’s about accepting this running
          life for all of it’s ups and downs. Because there WILL be ups, of
          course, and don’t we all love those? It’s easy to keep running when
          running comes easy. But the downs, well that’s when running gets real.
          Because there WILL be downs. No matter how perfectly you train, no
          matter how effective your recovery, no matter how much you want every
          run to feel like you’re gliding along a path of golden silk (is that
          even a thing? I don’t know but it sounds like a divine running
          experience!).
        </Body>
        <Body>
          Coping with the downs is largely about self talk. The narrative you
          create around tough runs is key to how you cope with and eventually
          move on from these runs. Take a moment to think about the last time
          running really sucked for you. What was that little voice inside your
          head saying as you puffed and lumbered your way through the difficult
          workout, as your legs felt like blocks of lead and your heart pounded
          through your chest? My little running nemesis likes to tell me that
          I’m a fraud, I haven’t worked hard enough and if I can’t run well how
          am I ever going to help anyone else as a runner? The challenge for me
          is to turn that negative self talk around. I’m not a fraud, I’m a real
          runner facing the same challenges as every other runner on the planet.
          I have worked hard, but perhaps I haven’t recovered properly or life’s
          other demands have left me sluggish. And maybe this “tough run” would
          be an opportunity to open dialogue with clients about their tough
          runs.
        </Body>
        <Body>
          But my biggest weapon against tough runs is a handy little mantra.
          This mantra helps me accept the tough run, accept my body’s
          limitations on the day and accept that my next run is a fresh
          opportunity. My tough run mantra is “That’s good training”. Short,
          sweet and so very true. Anyone can finish a run they find easy. But
          finishing a difficult run, that’s great training for both mind and
          body. It sucked, it was hard, it was uncomfortable but, dammit,{' '}
          <strong>I did it.</strong>
        </Body>
        <Body>And that’s good training.</Body>
      </Container>
    </Layout>
  );
}
