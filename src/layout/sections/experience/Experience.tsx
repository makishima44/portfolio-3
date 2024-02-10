import React, { useState } from "react";
import { styled } from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { Contrainer } from "../../../components/Container";
import { theme } from "../../../styles/Themes";

export const Experience = () => {
  return (
    <StyledExpirience>
      <Contrainer>
        <FlexWrapper justify="space-between" wrap="wrap">
          {" "}
          <ExpirienceContainer>
            {" "}
            <ExpirienceTitleNumber>4 +</ExpirienceTitleNumber>
            <ExpirienceTitle>
              <br />
              Years
              <br />
              Experience
              <br />
              Working
            </ExpirienceTitle>
          </ExpirienceContainer>
          <SpecializedContainer>
            <SpecializedTitle>
              Developer and Designer, specialized in
              <br /> UI/UX and Web Developer
            </SpecializedTitle>

            <FlexWrapper gap="15px" wrap="wrap">
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
            </FlexWrapper>
          </SpecializedContainer>
        </FlexWrapper>
      </Contrainer>
    </StyledExpirience>
  );
};

const StyledExpirience = styled.section`
  padding: 100px 0;
  background: rgb(34, 42, 54);
  height: 100%;
`;

const ExpirienceContainer = styled.div`
  @media (max-width: 1136px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ExpirienceTitle = styled.h2`
  font-family: "Playfair Display";
  font-size: 40px;
  font-weight: 700;
  line-height: 180%;
  color: ${theme.mainFont};
`;

const ExpirienceTitleNumber = styled.span`
  font-family: "Playfair Display";
  font-size: 100px;
  color: #676cdb;
`;

const SpecializedContainer = styled.div`
  @media (max-width: 1130px) {
  }
`;

const SpecializedTitle = styled.h2`
  text-align: center;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 700;
  line-height: 180%;
  color: ${theme.mainFont};
  margin-bottom: 20px;
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
  w

  &:hover {
    background: rgb(103, 108, 219);
    color: ${theme.mainFont};
  }
`;

const SpecializedText = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0%;
  padding-top: 10px;
`;
