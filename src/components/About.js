import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1a1a1a; /* Dark background */
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7); /* Darker shadow */
`;

const Title = styled.h2`
  font-size: 1.8em; /* Slightly smaller title */
  margin-bottom: 15px; /* Reduced margin */
  color: #ecf0f1; /* Light text color */
`;

const PyramidContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping to create rows */
  justify-content: center; /* Center the items */
  max-width: 800px; /* Limit the width of the container */
`;

const PyramidBlock = styled.div`
  background-color: #2980b9; /* Darker blue */
  color: #ecf0f1; /* Light text color */
  padding: 10px 15px; /* Reduced padding */
  margin: 5px; /* Reduced margin */
  border-radius: 5px;
  width: 180px; /* Smaller width for blocks */
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05); /* Slightly larger on hover */
  }
`;

const About = () => (
  <Section>
    <Title>About Me</Title>
    <PyramidContainer>
      <PyramidBlock>I’m Can, a 20-year-old who loves reading, coding and writing.</PyramidBlock>
      <PyramidBlock>I’m using this portfolio to track my journey as I dive into coding and blockchain technology.</PyramidBlock>
      <PyramidBlock>Right now, I’m learning Solidity, Rust, and JavaScript while working on some cool projects.</PyramidBlock>
      <PyramidBlock>I’m also studying economics at university.</PyramidBlock>
      <PyramidBlock>On top of that, I’m really into AI and open-source projects.</PyramidBlock>
      <PyramidBlock>I enjoy learning new languages too—I’ve been studying Spanish for about six months and Russian for about two months.</PyramidBlock>
      <PyramidBlock>Thanks for stopping by!</PyramidBlock>
    </PyramidContainer>
  </Section>
);

export default About;