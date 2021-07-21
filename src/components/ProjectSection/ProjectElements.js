import styled, { keyframes } from "styled-components";

export const ProjectContainer = styled.section`
  justify-content: center;
  flex-direction: column;
  background: #f5f5f5;

  @media screen and (max-width: 768px) {
    height: 1900px;
  }

  @media screen and (max-width: 480px) {
    height: 1900px;
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

export const Heading = styled.h2`
  font-size: 2.5rem;
  color: #05386b;
  margin-bottom: 64px;

  animation-name: ${({ isAnimated }) =>
    isAnimated ? headingAnimation : "none"};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectBoxWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectBox = styled.div`
  height: 200px;
  width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 340px;

  background: transparent;
  perspective: 1000px;
`;

export const FlipCardInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;

  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const FrontCard = styled.div`
  position: absolute;
  background: #fff;

  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  border: 2px solid #e5e5e5;
  box-shadow: 5px 5px 5px #888, -5px -5px 5px #efefef;
  border-radius: 20px;
`;

export const BackCard = styled.div`
  position: absolute;
  transform: rotateY(180deg);
  height: 205px;
  width: 205px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  border: 2px solid #e5e5e5;
  box-shadow: 5px 5px 5px #888, -5px -5px 5px #efefef;
  border-radius: 20px;
  padding: 10px;
`;

export const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 20px;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #05386b;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #05386b;
  overflow: hidden;
  text-align: center;
`;

export const Button = styled.a`
  cursor: pointer;
  display: block;
  padding: 14px 25px;
  margin-top: 10px;
  background: #5cdb95;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(0, -10%);
`;
