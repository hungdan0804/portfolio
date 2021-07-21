import React, { useEffect, useRef, useState } from "react";
import {
  HeroContainer,
  HeroWrapper,
  HeroRow,
  FirstColumn,
  LastColumn,
  TextWrapper,
  Heading,
  Description,
  ButtonWrap,
  HeroButtonLink,
  ImgWrap,
  Video,
  Name,
  SocialIconsLink,
  SocialMediaWrapper,
} from "./HeroElements";
import VideoData from "../../videos/code-typing.mp4";
import { FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const ref = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const callback = (entry) => {
    if (entry[0].intersectionRatio > 0.5) {
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
    <HeroContainer id="home" ref={ref}>
      <HeroWrapper>
        <HeroRow>
          <FirstColumn>
            <TextWrapper>
              <Heading isAnimated={isAnimated}>Hi, I am</Heading>
              <Name isAnimated={isAnimated}>Hung Dan</Name>
              <Description isAnimated={isAnimated}>
                I am Software Developer.
              </Description>
            </TextWrapper>
            <ButtonWrap>
              <HeroButtonLink isAnimated={isAnimated}>Hire me</HeroButtonLink>
            </ButtonWrap>
            <SocialMediaWrapper>
              <SocialIconsLink
                isAnimated={isAnimated}
                href="https://mail.google.com/mail/u/0/?fs=1&to=hungdan123456@gmail.com&su=Enquiry&tf=cm"
                target="_blank"
                aria-label="Facebook"
              >
                <FaEnvelope />
              </SocialIconsLink>
              <SocialIconsLink
                isAnimated={isAnimated}
                href="https://www.facebook.com/hungdan0804/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconsLink>

              <SocialIconsLink
                isAnimated={isAnimated}
                href="https://www.linkedin.com/in/hungdan-tang-9197831b6/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaLinkedin />
              </SocialIconsLink>
            </SocialMediaWrapper>
          </FirstColumn>
          <LastColumn>
            <ImgWrap isAnimated={isAnimated}>
              <Video autoPlay loop muted src={VideoData} type="video/mp4" />
            </ImgWrap>
          </LastColumn>
        </HeroRow>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
