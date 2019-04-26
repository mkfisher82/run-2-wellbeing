import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import SectionTitle from '../../components/sectionTitle';
import Nav from '../../components/nav';

import BlogImg from '../../images/nikki.jpg';

const Container = styled.div`
  max-width: 960px;
  padding: 0 5%;
  margin: 0 auto;
`;

const GuestPost = styled.h2`
  text-align: center;
  color: #333;
  text-decoration: underline;
`;

const Body = styled.p`
  font-size: 1.5rem;
`;

const About = styled.p`
  font-size: 1.25rem;
`;

const BlogImage = styled.img`
  margin: 0px auto;
  display: block;
`;

export default function Blog() {
  return (
    <Layout>
      <Nav />
      <Container>
        <GuestPost>Guest Post by Nikki Bollen MisFIT NZ</GuestPost>
        <SectionTitle title="Managing Anxiety Through Exercise" />
        <BlogImage src={BlogImg} width="100%" alt="Photo of Nikki Bollen" />
        <Body>
          When you’re anxious or stressed about something, getting out and
          exercising in any way can seem so unappealing.
        </Body>
        <Body>
          You know what though? Sometimes exercise, even short, gentle amounts
          of it, can be EXACTLY what your body (and mind) need.
        </Body>
        <Body>
          I admit, I never subscribed to this idea. If you’re anxious, you
          should just do what your mind wants, right? Just chill out and try not
          to think about it? (While what actually happens is you think about it
          more and more and make it worse, right?.) Or maybe you just want to
          keep ticking things off your to do list to keep that feeling of
          control somewhere in your life.
        </Body>
        <Body>No.</Body>
        <Body>
          I would often find myself spiralling into a panic about one thing or
          another, and often my anxiety presented itself as an upset/nauseous
          tummy, along with racing heart/palpitations. It got to the point where
          I spent close to a year being convinced I was coming down with a
          stomach bug, on a DAILY basis. Then I would worry about it more, make
          it worse, and would often end up feeling this way for days. It was
          AWFUL.
        </Body>
        <Body>
          I now understand that my nerves/anxiety will often present in this
          way, I have medication (reflux type medication to help calm my tummy),
          but more than anything, learning that there wasn’t any kind of tummy
          bug, nor any other stomach problems, has hugely helped. Now when I
          feel it happening, before I start freaking out that it’s a bug, or
          I’ve eaten something I shouldn’t have, I take a good hard think about
          it. Am I worried about something? What is causing me to be nervous?
          Can I fix it?
        </Body>
        <Body>
          It doesn’t get rid of it completely, but it is helping - being aware
          that this is more likely the cause of it. I have been offered
          medication on a number of times, to combat the anxiety itself, however
          I have chosen to work on this myself, for the time being.
        </Body>
        <Body>But how to help with the nerves BEFORE this happens?</Body>
        <Body>
          Exercise has helped more than I ever thought it could. I’ve really
          stepped it up this year, and I’m finding myself a lot calmer. First
          because my walks/weight lifting sessions are my ME time (so don’t be
          offended if I turn you down for going for walks together!) I use it as
          my thinking time - thinking about life, about ideas for my business,
          you name it. But it’s also nice to just put the ear buds in, turn up
          the volume and just walk. I find it is helping me so much, and it’s
          been worth it to really increase my level of activity this past 6
          months or so. The more regularly I move my body, the calmer I am, and
          the better I sleep.
        </Body>
        <Body>
          You don’t have to go out there and get straight into 7 days a week,
          hours a day type exercise. Not at all. But starting out with gentle
          exercise a few times a week, and increasing it as you feel comfortable
          - I BET you will find it helps. Take the dog for a walk, walk along
          the beach on your own, go for a swim. Do a Zumba class. Whatever you
          enjoy, wherever your happy place is - do more of that.
        </Body>
        <Body>
          I understand that this isn’t a one size fits all kind of subject.
          Maybe this won’t help you, maybe you’ve already tried it. But if you
          haven’t, why not give it a go? Get out there, move your body, blow the
          cobwebs out of your mind, and see if you feel better/sleep better. I
          would love to know how you get on!
        </Body>
        <Body>
          I want to point out, none of this detracts from visiting with your GP
          or Counsellor, nor should it take the place of any required
          medication. I don’t make claims of exercise curing anxiety and
          depression, only that it can help to manage it. Many professionals now
          include prescribing regular gentle exercise into their patients lives,
          for the same reasons I put above.
        </Body>
        <Body>
          How do you find regular exercise contributes to your mental health? Is
          it something you’ve tried, or are currently doing?
        </Body>
        <hr />
        <About>
          Nikki Bollen is the owner of MisFIT NZ, an online and face to face
          business, specialising in women’s wellness and fitness, via helping
          the ladies she works with to get more active, to care for themselves
          more and love themselves more. She can be reached by the following
          ways:
        </About>
        <About>
          Website: <a href="https://www.misfitnz.co.nz">www.misfitnz.co.nz</a>
          <br />
          Facebook:{' '}
          <a href="https://www.facebook.com/misfitnz">
            www.facebook.com/misfitnz
          </a>
          <br />
          Email: <a href="mailto: nikki@misfitnz.co.nz">nikki@misfitnz.co.nz</a>
          <br />
        </About>
      </Container>
    </Layout>
  );
}
