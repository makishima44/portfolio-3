import React, { useState } from "react";
import { styled } from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { Contrainer } from "../../../components/Container";
import { theme } from "../../../styles/Themes";
import { TitleStyled } from "../../../components/title/TitleStyled";
import { font } from "../../../styles/Common";

export const Experience = () => {
  return (
    <StyledExperience id="experience">
      <Contrainer>
        <ExperienceWrapper>
          {" "}
          <ExperienceContainer>
            {" "}
            <TitleStyled fontSize="100px" color="#676cdb" lineHeight="0.7">
              4 +
            </TitleStyled>
            <ExperienceTitle>
              Years
              <br />
              Experience
              <br />
              Working
            </ExperienceTitle>
          </ExperienceContainer>
          <SpecializedContainer>
            <SpecializedTitle>
              Developer and Designer, specialized in
              <br /> UI/UX and Web Developer
            </SpecializedTitle>

            <SpecializedWrapper>
              <SpecializedBlock>
                <Icon
                  iconId="computer"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30 "
                />
                <SpecializedText>
                  Front End
                  <br /> Developer
                </SpecializedText>
              </SpecializedBlock>

              <SpecializedBlock>
                <Icon
                  iconId="paint"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                />
                <SpecializedText>
                  UI/UX
                  <br /> Designer
                </SpecializedText>
              </SpecializedBlock>

              <SpecializedBlock>
                <Icon
                  iconId="lighting"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30 "
                />
                <SpecializedText>
                  Branding
                  <br /> Designer
                </SpecializedText>
              </SpecializedBlock>
            </SpecializedWrapper>
          </SpecializedContainer>
        </ExperienceWrapper>
      </Contrainer>
    </StyledExperience>
  );
};

const StyledExperience = styled.section`
  padding: 100px 0;
  background: rgb(34, 42, 54);
  height: 100%;
`;

const ExperienceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1136px) {
    justify-content: center;
    gap: 50px;
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 1136px) {
    flex-direction: row;
    gap: 25px;
  }
`;

const ExperienceTitle = styled.h2`
  ${font({
    family: "Playfair Display",
    weight: 700,
    Fmax: 40,
    Fmin: 26,
    lineHeight: 1.8,
  })};
`;

const SpecializedContainer = styled.div``;

const SpecializedWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 1136px) {
    justify-content: center;
  }
`;

const SpecializedTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;

  ${font({
    weight: 700,
    Fmax: 40,
    Fmin: 26,
    lineHeight: 1.8,
  })};
`;

const SpecializedBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: rgb(196, 196, 196);
  width: 290px;
  height: 300px;
  padding-left: 30px;
  padding-bottom: 35px;
  color: #222a36;

  &:hover {
    background: rgb(103, 108, 219);
    color: ${theme.mainFont};
  }

  @media (max-width: 624px) {
    max-width: 335px;
    max-height: 176px;
  }
`;

const SpecializedText = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  padding-top: 10px;
`;
