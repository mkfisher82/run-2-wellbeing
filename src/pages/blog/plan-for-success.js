import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import SectionTitle from '../../components/sectionTitle';
import Nav from '../../components/nav';

import BlogImg from '../../images/success.jpg';

const Container = styled.div`
  max-width: 960px;
  padding: 0 5%;
  margin: 0 auto;
`;

const Body = styled.p`
  font-size: 1.5rem;
`;

const List = styled.ol`
  list-style-type: none;
  li h3 {
    font-size: 2rem;
  }
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
        <SectionTitle title="Plan for your successes... And your failures" />
        <BlogImage src={BlogImg} width="100%" alt="Nicole holding her Triple Peaks second place medal" />
        <Body>
          You’ve worked long and hard for something, for many weeks, months or even years. You’ve strived, cried, nearly
          given up and spent many a night wondering if you’ve bitten off more than you can chew. You’ve also felt so
          sure that you are on the right track, that what you are striving for is exactly what you need to be doing in
          your life right now. How do you manage when it’s all over? When something that has shaped your identity, given
          you purpose, enjoyment and challenges galore is suddenly over? You can wind up feeling pretty lost and,
          surprisingly, you are at greater risk of this when you actually achieve the goal you have been working so long
          and hard for.
        </Body>
        <Body>
          This is something that happens to all of us and in so many different areas of our lives. It could be finally
          completing that degree or qualification. It could be buying a house after years of strict saving and
          frugality. That promotion you’ve had your eye on for years. It could be finishing the marathon you never
          thought possible or finally running 5k non-stop. You know the feeling. It’s the, “well what the hell do I do
          now?” feeling. Runners often refer to the “post race blues”, a feeling of let down and disappointment
          following a big race, often accompanied by frantically searching online race calendars for a new goal race.
        </Body>
        <Body>
          As a social worker I have always been concerned with “the process” and what we call “critical reflection”. Or
          what might be described in plain English as taking a good hard look at what was (or was not) achieved, what
          were the positives, what could be done differently next time and what next in relation to this particular
          goal. Too often when we achieve our goals we fail to honour the process and in doing so we don’t critically
          reflect on what we have experienced. We don’t take the time to acknowledge the magnitude of our achievements,
          we don’t take the time to say a proper goodbye to the people we’ve met along the way and who have helped us,
          even in small ways, on our journey. We don’t plan our next step, our course of action now that it’s all said
          and done. We move on with our busy lives not recognising that by leaving the process unfinished we have made
          room for that “well what the hell do I do now?” feeling to infiltrate our lives, causing us to feel
          dissatisfied, lose our direction and drive and, ultimately, negatively impact on our well-being.
        </Body>
        <Body>
          For runners who are striving to improve and maintain their mental health and well-being, it is vitally
          important to plan ahead and not leave the process unfinished. There are some simple steps you can take to
          ensure that you keep reaping those important health and well-being benefits of running long into the future
        </Body>
        <List>
          <li>
            <h3>1. Celebrate:</h3>
            <Body>
              You did it! Make sure you honour your achievement even if it’s just in a small way. Have a little party,
              treat yourself to something you rarely get to experience, gaze at your finisher medal... A lot (no, just
              me then?). Just do something to acknowledge the hard work and persistence that has gone into striving for
              this goal. And if you missed your goal this time? Well, you still need to celebrate. You might be
              thinking, “why that’s ridiculous Nicole, there’s nothing to celebrate if I didn’t meet my goal”. So you
              mean to tell me there’s absolutely nothing worth celebrating in what you just attempted? Nothing that you
              did well, nothing you nailed? What about that 2nd kilometre that you ran bang on goal pace. That there is
              an achievement.
            </Body>
          </li>
          <li>
            <h3>2. Rest:</h3>
            <Body>
              When a particular goal has dominated or even just been a big part of your life, it is important to take
              the time to recover, recoup and rediscover. That means taking time out to relax (particularly if your goal
              was very physically taxing), enjoy other activities that are unrelated to your goal and catch up on some
              of the things you may have put off.
            </Body>
          </li>
          <li>
            <h3>3. Reflect:</h3>
            <Body>
              Now is the time to think hard about your goal. What went well? What would you do differently next time?
              Are there other people/skills/resources you could utilise in the future that would improve your
              experience? What are some goal specific lessons you will be taking forward and what are some life lessons
              you have gained from this experience?
            </Body>
          </li>
          <li>
            <h3>4. Plan:</h3>
            <Body>
              With all this celebrating, resting and reflecting, you are now hopefully in a good mindset to plan for the
              future. Based on your reflections, your overall well-being and your performance in striving for your goal,
              what do you want to achieve next? This can be another big goal (eg, I ran the half successfully, next up a
              marathon!) or it may be a maintenance goal (eg, I want to focus on solely on my mental health and
              well-being and not worry about distances, times or speeds), it may even be re-assessing your old goal and
              the changes required to make it more achievable.
            </Body>
          </li>
        </List>
        <Body>
          So there you have it. A step by step guide to getting back out there knowing you have completed the process
          and have put yourself in the best possible position to avoid the dreaded “well what the hell do I do now”
          parasite from infecting your running and ultimately, your well-being.
        </Body>
      </Container>
    </Layout>
  );
}
