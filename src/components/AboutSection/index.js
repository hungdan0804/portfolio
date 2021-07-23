import React, { useEffect, useRef, useState } from "react";
import {
  AboutContainer,
  Heading,
  AboutBoxWrapper,
  AboutBox,
  Title,
  Subtitle,
  AboutIcon,
  ContentWrapper,
} from "./AboutElements";
import ImgEducation from "../../images/education.svg";
import ImgWorking from "../../images/working.svg";
import ImgSkill from "../../images/skill.svg";

const AboutSection = () => {
  const ref = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const callback = (entry) => {
    if (entry[0].intersectionRatio > 0.8) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  };
  const observer = new IntersectionObserver(callback, {
    root: ref.current,
    // Creates a threshold of with increments of 0.01
    threshold: new Array(101).fill(0).map((v, i) => i * 0.01),
  });

  useEffect(() => {
    observer.observe(ref.current);
  }, []);

  return (
    <AboutContainer ref={ref} id="About">
      <ContentWrapper>
        <Heading isAnimated={isAnimated}>About Me</Heading>
        <AboutBoxWrapper>
          <AboutBox>
            <AboutIcon src={ImgEducation} />
            <Title isAnimated={isAnimated}>Education</Title>
            <Subtitle isAnimated={isAnimated}>
              Vietnam National University Ho Chi Minh City - University of
              Science
            </Subtitle>
          </AboutBox>
          <AboutBox>
            <AboutIcon src={ImgWorking} />
            <Title isAnimated={isAnimated}>Experiences</Title>
            <Subtitle isAnimated={isAnimated}>
              I worked at TESSE TECHNOLOGY COMPANY from 10/2020 to 04/2021
            </Subtitle>
          </AboutBox>
          <AboutBox>
            <AboutIcon src={ImgSkill} />
            <Title isAnimated={isAnimated}>Skills</Title>
            <Subtitle isAnimated={isAnimated}>
              I know how to develop a Website and a Mobile Application
            </Subtitle>
          </AboutBox>
        </AboutBoxWrapper>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
