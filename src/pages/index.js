import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import styled from "styled-components";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import ImageSection from "../components/ImgSection";
import Img1 from "../images/bg_1.png";
import Img2 from "../images/bg_2.png";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <Sidebar isOpen={isOpenMenu} toggle={toggleMenu} />
      <Navbar toggle={toggleMenu} />
      <HeroSection />
      <AboutSection />
      <ImageSection Img={Img1} />
      <ProjectSection />
      <ImageSection Img={Img2} />
      <Footer />
    </>
  );
};

const Container = styled.div``;

export default Home;
