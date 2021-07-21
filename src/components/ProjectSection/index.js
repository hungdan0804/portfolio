import React, { useEffect, useRef, useState } from "react";
import {
  ProjectContainer,
  Heading,
  ProjectBoxWrapper,
  ProjectBox,
  Image,
  FlipCardInner,
  FrontCard,
  BackCard,
  Title,
  Subtitle,
  Button,
  ContentWrapper,
} from "./ProjectElements";
import Img1 from "../../images/app_img_1.svg";
import Img2 from "../../images/app_img_2.png";
import Img3 from "../../images/app_img_3.jpg";
import Img4 from "../../images/app_img_4.svg";
import Img5 from "../../images/app_img_5.png";
import Img6 from "../../images/app_img_6.png";

const ProjectSection = () => {
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
    <ProjectContainer id="Projects" ref={ref}>
      <ContentWrapper>
        <Heading isAnimated={isAnimated}>Recent Projects</Heading>
        <ProjectBoxWrapper>
          <ProjectBox className="flip-card">
            <FlipCardInner className="flip-card-inner">
              <FrontCard>
                <Image src={Img1} />
              </FrontCard>
              <BackCard>
                <Title>ADC</Title>
                <Subtitle>
                  Reactjs, React-Native, NodeJs, MongoDb, Firebase Storage
                </Subtitle>
                <Button href="https://github.com/vongdatcuong/aDentalClinic">
                  Source code
                </Button>
              </BackCard>
            </FlipCardInner>
          </ProjectBox>
          <ProjectBox className="flip-card">
            <FlipCardInner className="flip-card-inner">
              <FrontCard>
                <Image src={Img2} />
              </FrontCard>
              <BackCard>
                <Title>Noughts and crosses Online</Title>
                <Subtitle>Reactjs, Nodejs, MongoDb, SocketIO</Subtitle>
                <Button href="https://github.com/vongdatcuong/caroclient">
                  Source code
                </Button>
              </BackCard>
            </FlipCardInner>
          </ProjectBox>
          <ProjectBox className="flip-card">
            <FlipCardInner className="flip-card-inner">
              <FrontCard>
                <Image src={Img3} />
              </FrontCard>
              <BackCard>
                <Title>Unsplash Clone App</Title>
                <Subtitle>React-Native, UnsplashAPI</Subtitle>
                <Button href="https://github.com/hungdan0804/PhotoSharingApplication">
                  Source code
                </Button>
              </BackCard>
            </FlipCardInner>
          </ProjectBox>

          <ProjectBox className="flip-card">
            <FlipCardInner className="flip-card-inner">
              <FrontCard>
                <Image src={Img4} />
              </FrontCard>
              <BackCard>
                <Title>ToDo List</Title>
                <Subtitle>Reactjs, Nodejs, MongoDb</Subtitle>
                <Button href="https://github.com/hungdan0804/Do-An-Web-Nang-Cao-Client">
                  Source code
                </Button>
              </BackCard>
            </FlipCardInner>
          </ProjectBox>
          <ProjectBox className="flip-card">
            <FlipCardInner className="flip-card-inner">
              <FrontCard>
                <Image src={Img5} />
              </FrontCard>
              <BackCard>
                <Title>Quan 9</Title>
                <Subtitle>Flutter, Nodejs, MongoDB</Subtitle>
                <Button href="https://play.google.com/store/apps/details?id=com.edutek.q9">
                  App Store
                </Button>
              </BackCard>
            </FlipCardInner>
          </ProjectBox>
          <ProjectBox className="flip-card">
            <FlipCardInner className="flip-card-inner">
              <FrontCard>
                <Image src={Img6} />
              </FrontCard>
              <BackCard>
                <Title>Vetop</Title>
                <Subtitle>
                  Reactjs, React-Native, Nodejs, MongoDb, SocketIO, Nextjs
                </Subtitle>
              </BackCard>
            </FlipCardInner>
          </ProjectBox>
        </ProjectBoxWrapper>
      </ContentWrapper>
    </ProjectContainer>
  );
};

export default ProjectSection;
