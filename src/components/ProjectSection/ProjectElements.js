import styled, { keyframes } from "styled-components";

export const ProjectContainer = styled.section`
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

const headingAnimation = keyframes`
   0% {transform:translateY(-32px)}
  100% {transform:translateY(0px)}
`;

export const Heading = styled.h2`
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

export const ProjectBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: min(100%, 900px);

  > * {
    margin-bottom: 2em;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    > * {
      flex-basis: 33%;
    }
  }
`;

export const ProjectBox = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: transparent;
  perspective: 1000px;
`;

export const FlipCardInner = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;

  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const FrontCard = styled.div`
  width: 90%;
  height: 100%;
  position: absolute;
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  border: 2px solid #e5e5e5;
  box-shadow: 5px 5px 5px #888, -5px -5px 5px #efefef;
  border-radius: 20px;
`;

export const BackCard = styled.div`
  position: absolute;
  transform: rotateY(180deg);
  width: 90%;
  height: 100%;
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
