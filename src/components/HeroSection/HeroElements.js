import styled, { keyframes } from "styled-components";
import { Link as LinkScoll } from "react-scroll";

export const HeroContainer = styled.section`
  background: #5cdb95;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: min(90%, 900px);

  margin-top: 80px;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    > * {
      flex-basis: 100%;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 550px;
  padding-top: 0;
  padding-bottom: 20px;
  overflow: hidden;
`;

const headingAnimation = keyframes`
   0% {transform:translateY(-32px)}
  100% {transform:translateY(0px)}
`;

export const Heading = styled.h2`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
  color: #05386b;
  margin-bottom: 0.3em;

  animation-name: ${({ isAnimated }) =>
    isAnimated ? headingAnimation : "none"};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const descAnimation = keyframes`
   0% {transform:translateY(24px)}
  100% {transform:translateY(0px)}
`;

export const Description = styled.p`
  max-width: 440px;
  margin-bottom: 20px;
  font-size: 1.3rem;

  color: #05386b;
  overflow: hidden;

  animation-name: ${({ isAnimated }) => (isAnimated ? descAnimation : "none")};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const nameAnimation = keyframes`
  0% {transform:translateX(-30px)}
  100% {transform:translateX(0px)}
`;

export const Name = styled.p`
  display: inline-block;
  margin-left: 10px;
  margin-bottom: 12px;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;

  animation-name: ${({ isAnimated }) => (isAnimated ? nameAnimation : "none")};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const imgAnimation = keyframes`
  0% {transform:scale(0.5)}
  100% {transform:scale(1)}
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;

  animation-name: ${({ isAnimated }) => (isAnimated ? imgAnimation : "none")};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`;

export const Video = styled.video`
  width: 90%;
  padding: 0;
  background: transparent;
  -o-object-fit: cover;
  object-fit: cover;
`;

const buttonAnimation = keyframes`
  0% {opacity:0;width:50px}
  100% {opacity:1;width:150px}
`;

export const HeroButtonLink = styled(LinkScoll)`
  border-radius: 30px;
  background: #05386b;
  white-space: nowrap;
  padding: 14px 18px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  width: 150px;

  animation-name: ${({ isAnimated }) =>
    isAnimated ? buttonAnimation : "none"};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  &:hover {
    box-shadow: 10px 10px 8px #379683;
    transform: translateY(-0.25em);
    transition: all 0.3s ease-in-out;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  max-width: 300px;
  align-items: center;
  margin: 20px 5px;
`;

const SocialIconAnimation = keyframes`
  0% {opacity:0;transform:scale(0.3)}
  100% {opacity:1;transform:scale(1)}
`;

export const SocialIconsLink = styled.a`
  color: #05386b;
  font-size: 28px;

  overflow: hidden;
  cursor: pointer;

  animation-name: ${({ isAnimated }) =>
    isAnimated ? SocialIconAnimation : "none"};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  + * {
    margin-left: 0.5em;
  }
`;
