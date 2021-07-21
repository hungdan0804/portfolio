import React from "react";
import { ImageContainer, ImgBackground } from "./ImageElements";

const ImageSection = ({ Img }) => {
  return (
    <ImageContainer>
      <ImgBackground Img={Img} />
    </ImageContainer>
  );
};

export default ImageSection;
