import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.section`
  flex-direction: column;
  background: #f5f5f5;

  @media screen and (max-width: 768px) {
    height: 1300px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    height: 100vh;
  }
`;

const headingAnimation = keyframes`
   0% {transform:translateY(-32px)}
  100% {transform:translateY(0px)}
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  color: #05386b;
  margin-top: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }

  animation-name: ${({ isAnimated }) =>
    isAnimated ? headingAnimation : "none"};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const titleAnimation = keyframes`
   0% {transform: scale(0.5);opacity:0}
  100% {transform: scale(1);opacity:1}
`;

export const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;

  animation-name: ${({ isAnimated }) => (isAnimated ? titleAnimation : "none")};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`;

export const AboutBoxWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutBox = styled.div`
  border: 2px solid #e5e5e5;
  box-shadow: 5px 5px 5px #888, -5px -5px 5px #efefef;
  border-radius: 20px;
  transform: scale(0.95);
  transition: all 0.4s ease-in-out;
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 340px;
  padding: 20px;

  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 15px 15px 15px #888, -15px -15px 15px #efefef;
  }
`;

export const AboutIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const subtitleAnimation = keyframes`
   0% {opacity:0}
  100% {opacity:1}
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  text-align: center;

  animation-name: ${({ isAnimated }) =>
    isAnimated ? subtitleAnimation : "none"};
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(0, -10%);
`;
