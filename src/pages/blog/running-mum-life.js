import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout'
// import Nav from '../../components/nav';
import SectionTitle from '../../components/sectionTitle';

import RunningMumImg from '../../images/running-mum-life.jpg';


const Container = styled.div`
  max-width: 960px;
  padding: 0 5%;
  margin: 0 auto;
`;

const Body = styled.p`
  font-size: 1.5rem;
`
const List = styled.ol`
  list-style-type: none;
  li h3 {
    font-size: 2rem;
  }
`
const BlogImage = styled.img`
  margin: 0px auto;
  display: block;
`


export default function RunningMum() {
  return (
    <Layout>
    <Container>
      <SectionTitle title="The Running Mum Life" />
      <BlogImage src={RunningMumImg} width="100%" alt="Nicole running with her two boys." />
      <Body>
      One of the most common questions I get around my running is “how do you find the time to run with three little kids?” It’s a bit of a tough question, because ever since I became a mum, I’ve been a running mum. I actually don’t know any different. But over the last 6 or so years  of being a mum and a runner, I reckon I’ve picked up a few hacks along the way. Here are my big 3.
      </Body>

    <List>
      <li>
        <h3>1. Believe that your mind and body are family priorities</h3>
        <Body>This is probably the biggest hurdle I see mums facing. Busy family life means that mum is rushing here and there, making sure everyone else is well looked after. But what about mum? I know, I know. You are busy. Of course you are, isn’t everyone? But I’ll be you still find time to make sure the kids get to their activities, that the family has nutritious food to eat, appointments are booked and birthday parties attended? So why is it that your needs should be at the bottom of the family pile? A big mental leap for many mums is that they are important and even *gasp* that it is ok for other family members to have to make some sacrifices so that mum can fill her own cup. Often it is mum herself putting these limitations in place. She probably comes from a long and proud line of mums who put themselves last. But the interesting thing is, when mum does start to carve out some space in family life for her own wellbeing, the rest of the family usually gets on board! They can see and feel her change in attitude and self belief. And this improves the wellbeing of the whole family.</Body>
      </li>
      <li>
        <h3>2. Make them training partners</h3>
        <Body>Partners and kids can all make great training partners. From babies that ride along in the running pram, toddlers on their balance bikes, tweens on scooters, teenagers joining in the training and partners tagging along, the possibilities are endless. In our family, we like to go for “family runs”. That’s the 6 year old on his bike, the three year old having small turns on the balance bike, baby in the pram and hubby and I running. We nearly always finish family runs with a play at the park or a cuppa at a local cafe. We have always included these runs in our programmes, ever since our first was born. Sure, sometimes a crying baby means the run stops short. Or sometimes the runs are interrupted by constant toddler requests. But on the whole we have made some very happy family memories on these outings.  Lower your expectations and have some fun outside together!</Body>
      </li>
      <li>
        <h3>3. Be flexible</h3>
        <Body>Get your runs in whenever, however and wherever you can. I mean, I would love to be out running technical single track trails everyday but at the moment that’s just not realistic. I’d prefer to knock out a half marathon in training without returning home to feed the baby part way through. But the reality is that I have a little girl who is hungry back at home! My ideal time of the day to run is about 9am. But with all the activities and commitments of a work from home and homeschooling family, that’s a luxury I don’t always have. Sometimes runs have to be shorter, faster, interrupted or include a few errands. It’s not always ideal. But you know what, non ideal stuff happens on race day and I reckon that if you’ve had a bit of practice dealing with the unexpected, it means you are less likely to be completely thrown if the perfect race you have envisaged doesn’t quite pan out how you thought it would. </Body>
      </li>
    </List>
    <Body>
        Running with kids, like life with kids, is often messy, a little chaotic and rarely perfect. But when your six year old tells you that they like to run because “it makes me feel good,” you know you must be doing something right.   
      </Body>
    </Container>


    </Layout>
  );
}
