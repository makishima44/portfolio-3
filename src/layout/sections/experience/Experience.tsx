import React from "react";
import { styled } from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const Experience = () => {
  return (
    <StyledExpirience>
      <FlexWrapper justify="space-between">
        {" "}
        <ExpirienceTitle>
          4 +
          <br />
          Years
          <br />
          Experience
          <br />
          Working
        </ExpirienceTitle>
        <SpecializedContainer>
          <SpecializedTitle>
            Developer and Designer, specialized in
            <br /> UI/UX and Web Developer
          </SpecializedTitle>
          <FlexWrapper gap="15px">
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
                viewBox="0 0 30 30 "
              />
              <SpecializedText>
                Front End
                <br /> Developer
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
                Front End
                <br /> Developer
              </SpecializedText>
            </SpecializedBlock>
          </FlexWrapper>
        </SpecializedContainer>
      </FlexWrapper>
    </StyledExpirience>
  );
};

const StyledExpirience = styled.section`
  padding: 100px 0;
  background: rgba(34, 42, 54, 0.95);
  min-height: 100%;
`;
const ExpirienceTitle = styled.h2``;

const SpecializedContainer = styled.div``;

const SpecializedTitle = styled.h2``;

const SpecializedBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(196, 196, 196);
  width: 290px;
  height: 300px;
`;
const SpecializedText = styled.span``;
