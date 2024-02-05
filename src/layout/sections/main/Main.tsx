import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import mainPhoto from "./../../../assets/images/Rectangle 3.jpeg";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify="space-between">
        {" "}
        <About>
          <AboutMainTitle>
            Hello!
            <br />
            I’m Zarror Nibors
          </AboutMainTitle>

          <AboutMainText>
            I’am freelance web developer based in Indonesia who loves to craft
            attractive design experiences for the web.
          </AboutMainText>

          <AboutMainButton>
            <Icon iconId="mail" height="20" width="20" viewBox="0 0 20 20" />
            <AboutMainLink>Email me</AboutMainLink>
          </AboutMainButton>

          <AboutMainButton>
            <Icon
              iconId="download"
              height="20"
              width="20"
              viewBox="0 0 20 20"
            />
            <AboutMainLink>Download CV</AboutMainLink>
          </AboutMainButton>
        </About>
        <MainPhoto src={mainPhoto} />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  height: 100%;
`;

const About = styled.div`
  background: rgba(34, 42, 54, 0.95);
  width: 50%;
`;

const AboutMainTitle = styled.h1``;

const AboutMainText = styled.p``;

const AboutMainButton = styled.button`
  background-color: red;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

const AboutMainLink = styled.a``;

const MainPhoto = styled.img`
  width: 50%;
`;
