import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialIconsLink,
  SocialMediaLogo,
  WebsiteRights,
  FooterTextWrapper,
  Text,
  InfoWrapper,
} from "./FooterElement";
import { FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer id="Contact">
      <FooterWrap>
        <FooterTextWrapper>
          <InfoWrapper>
            <SocialIconsLink
              href="https://mail.google.com/mail/u/0/?fs=1&to=hungdan123456@gmail.com&su=Enquiry&tf=cm"
              target="_blank"
              aria-label="Facebook"
            >
              <FaEnvelope />
            </SocialIconsLink>
            <Text>
              Email
              <br />
              hungdan123456@gmail.com
            </Text>
          </InfoWrapper>
          <InfoWrapper>
            <SocialIconsLink
              href="https://www.facebook.com/hungdan0804/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconsLink>
            <Text>
              Facebook
              <br /> facebook.com/hungdan0804
            </Text>
          </InfoWrapper>

          <InfoWrapper>
            <SocialIconsLink
              href="https://www.linkedin.com/in/hungdan-tang-9197831b6/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaLinkedin />
            </SocialIconsLink>
            <Text>
              LinkedIn
              <br />
              linkedin.com/in/hungdan-tang-9197831b6
            </Text>
          </InfoWrapper>
        </FooterTextWrapper>

        <SocialMediaLogo to="/" onClick={toggleHome}>
          Portfolio
        </SocialMediaLogo>

        <WebsiteRights>
          Portfolio {new Date().getFullYear()} All rights reserved.
        </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
