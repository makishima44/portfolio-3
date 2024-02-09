import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import mainPhoto from "./../../../assets/images/Rectangle 3.jpeg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Contrainer } from "../../../components/Container";
import { theme } from "../../../styles/Themes";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify="space-between" wrap="wrap">
        <BGroundBlock>
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
            <AboutMainButton>
              <Icon iconId="mail" height="20" width="20" viewBox="0 0 20 20" />
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
          </MainBlock>
        </BGroundBlock>
        <PhotoContainer>
          <MainPhoto src={mainPhoto} />
        </PhotoContainer>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100%;
  background: rgba(34, 42, 54, 0.95);
  position: relative;
`;

const BGroundBlock = styled.div`
  width: 50%;
  background: rgba(34, 42, 54, 0.95);
`;

const AboutMainTitle = styled.h1`
  ${font({
    family: '"Playfair Display"',
    weight: 700,
    lineHeight: 1.2,
    Fmax: 90,
    Fmin: 30,
  })};
`;

const AboutMainText = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  font-weight: 400;
  line-height: 180%;
  margin: 20px 0 30px;
`;

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
  }

  &:hover {
    background-color: #676cdb;
  }
`;

const MainPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PhotoContainer = styled.div`
  width: 50%;
`;

const MainBlock = styled.div`
  top: 24%;
  right: 35%;
  position: absolute;
`;
