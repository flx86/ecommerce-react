import React from "react";
import styled from "styled-components";

import LaptopGirl from "../svg/laptop-girl.svg";
import HeroBackground from "../svg/Hero.svg";

// Components
import Button from "./Button";

const HeroContainer = styled.div`
  height: 90vh;
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
`;

const TextContainer = styled.div`
  position: absolute;
  max-width: 700px;
  top: 15%;
  left: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BigText = styled.h1`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 4.5rem;
  margin-bottom: 0.5em;
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
