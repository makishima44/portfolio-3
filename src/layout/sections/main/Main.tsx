import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import mainPhoto from "./../../../assets/images/Rectangle 3.jpeg";
import { theme } from "../../../styles/Themes";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain id="main">
      <MainWrapper>
        <AboutContainer>
          {" "}
          <MainBlock>
            <AboutMainTitle>
              Hello!
              <br />
              I’m Zarror Nibors
            </AboutMainTitle>
            <AboutMainText>
              I’am freelance web developer based in
              <br /> Indonesia who loves to craft attractive
              <br /> design experiences for the web.
            </AboutMainText>
            <ButtonContainer>
              <AboutMainButton>
                <Icon
                  iconId="mail"
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                />
                <a href="">Email me</a>
              </AboutMainButton>
              <AboutMainButton>
                <Icon
                  iconId="download"
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                />
                <a href="">Download CV</a>
              </AboutMainButton>
            </ButtonContainer>
          </MainBlock>
        </AboutContainer>

        <PhotoContainer>
          <MainPhoto src={mainPhoto} />
        </PhotoContainer>
      </MainWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100hv;
  background: rgba(34, 42, 54, 0.95);
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 70px;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    padding-bottom: 20px;
  }
`;

const MainBlock = styled.div`
  white-space: nowrap;
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  z-index: 2;

  @media (max-width: 768px) {
  }
`;

const AboutMainTitle = styled.h1`
  ${font({
    family: "Playfair Display",
    weight: 700,
    Fmax: 90,
    Fmin: 20,
  })};
`;

const AboutMainText = styled.p`
  ${font({
    weight: 400,
    Fmax: 20,
    Fmin: 13,
    lineHeight: 1.8,
    color: "rgba(255, 255, 255, 0.5)",
  })};
`;

const ButtonContainer = styled.div``;

const AboutMainButton = styled.button`
  width: 180px;
  height: 64px;
  background: rgba(34, 42, 54, 0.95);

  a {
    font-size: 20px;
    font-weight: 400;
    line-height: 120%;
    margin-left: 10px;
    color: ${theme.mainFont};

    @media (max-width: 935px) {
      font-size: 15px;
    }
  }

  &:hover {
    background-color: #676cdb;
  }

  @media (max-width: 935px) {
    width: 145px;
  }

  @media (max-width: 600px) {
    width: 110px;
  }
`;

const PhotoContainer = styled.div`
  width: 50%;
  min-width: 360px;

  @media (max-width: 768px) {
    order: 1;
    width: 100%;
  }
`;

const MainPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
