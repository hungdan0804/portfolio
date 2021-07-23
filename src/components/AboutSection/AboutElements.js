import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  background: #f5f5f5;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(90%, 900px);

  padding: 2rem 0;
`;

export const AboutBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    > * {
      flex-basis: 100%;
    }
    > * + * {
      margin-left: 2em;
    }
  }
`;

const headingAnimation = keyframes`
   0% {transform:translateY(-32px)}
  100% {transform:translateY(0px)}
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  color: #05386b;
  margin-bottom: 1em;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }

  animation-name: ${({ isAnimated }) =>
    isAnimated ? headingAnimation : "none"};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
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
  padding: 20px;

  &:hover,
  &:active {
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
