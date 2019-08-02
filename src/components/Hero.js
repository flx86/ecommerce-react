import React from "react";
import styled from "styled-components";

import LaptopGirl from "../svg/laptop-girl.svg";
import HeroBackground from "../svg/Hero.svg";

// Components
import Button from "./Button";

const HeroContainer = styled.div`
  height: 600px;
  background: var(--clr-background);
  position: relative;
`;

const HeroImgContainer = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  background: url(${HeroBackground}) center/cover no-repeat;
  border-radius: 45px;
  z-index: 1;
`;

const CallToActionContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`;

const LaptopGirlContainer = styled.div`
  position: absolute;
  bottom: -10%;
  left: -2%;
  width: 35%;
  height: auto;

  @media ${props => props.theme.mediaQueries.laptop} {
    display: none;
  }
`;

const TextContainer = styled.div`
  max-width: 680px;
  position: absolute;
  top: 20%;
  left: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;

  @media ${props => props.theme.mediaQueries.laptop} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

const BigText = styled.h1`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 7.2rem;
  margin-bottom: 0.5em;

  /* @media ${props => props.theme.mediaQueries.laptop} {
    max-width
  } */
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImgContainer>
        <CallToActionContainer>
          <LaptopGirlContainer>
            <img src={LaptopGirl} alt="laptop girl" />
          </LaptopGirlContainer>
          <TextContainer>
            <BigText>find your perfect computer with us.</BigText>
            <Button title={"go shop now"} />
          </TextContainer>
        </CallToActionContainer>
      </HeroImgContainer>
    </HeroContainer>
  );
};

export default Hero;
