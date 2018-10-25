import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Nav from '../components/nav';
import SectionTitle from '../components/sectionTitle';
import Resource from '../components/resource';
import FeatureResource from '../components/featureResource';
import WendyImg from '../images/WendySuzuki.jpg';

const Container = styled.div`
  max-width: 960px;
  padding: 0 5%;
  margin: 0 auto;
`;

const LinkStyled = styled(Link)`
  font-size: 1.5em;
`
export default function About() {
  return (
    <Layout>
        
            <Container>
                <Nav />
                <SectionTitle title="Resources" />
                <p>Unsure about how the simple act of running might benefit your mental health and overall wellbeing? Check out these articles, videos and blog posts to learn more about the power of exercise to change your brain, your body and your life.</p>

                <FeatureResource                        link='https://www.ted.com/talks/wendy_suzuki_the_brain_changing_benefits_of_exercise/up-next?language=en' 
                title="The brain changing benefits of exercise"
                desc="An entertaining Ted Talk that details how exercise can actually change the structure of the brain."
                image={WendyImg}
                />

                {resources.map((resource)=> {
                    return <Resource link={resource.link} title={resource.title} desc={resource.desc}/>
                })}
                
            </Container>
    </Layout>
  );
}

const resources = [
    {
        link: 'https://www.psychologytoday.com/us/blog/the-athletes-way/201810/aerobic-exercise-has-clinically-tested-antidepressant-powers',
        title:"ARTICLE: Aerobic Exercise Has Clinically-Tested Antidepressant Powers",
        desc: "The author of “The Athlete’s way: Sweat and the Biology of Bliss” discusses his personal experience of the benefits of moderate-vigorous activity on his own mental health as well as a recent meta-analysis that supports this anecdotal data."
    },
    {
        link: "https://youtu.be/OK_vnVbxBXE",
        title:"VIDEO: Dr Cullen Hardy",
        desc: "An animated You Tube video that explains the mental health benefits of regular exercise."
    },
    {
        link: "https://youtu.be/Wto7zISB2d0",
        title:"VIDEO: How exercise affects your body and mind",
        desc: "This video provides information about the role of exercise in managing depression."
    },
    {
        link: "https://www.psychologytoday.com/us/blog/what-works-and-why/201803/why-exercise-is-so-essential-mental-health",
        title:"ARTICLE: Why exercise is so essential for mental health",
        desc: "This article discusses how exercise can both treat and prevent mental health issues."
    },
   
  ];
