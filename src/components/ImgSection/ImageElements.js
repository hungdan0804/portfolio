import styled from "styled-components";

export const ImageContainer = styled.section`
  height: 100vh;

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    height: 50vh;
  }
`;

export const ImgBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-image: url(${({ Img }) => Img});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1024px) and (min-width: 769px) {
    height: 50vh;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(47, 112, 76, 0.5) 100%
      ),
      linear-gradient(180deg, rgba(47, 112, 76, 0.3) 0%, transparent 100%);
  }
`;
