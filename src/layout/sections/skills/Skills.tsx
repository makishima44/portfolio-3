import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Contrainer } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Contrainer>
        {" "}
        <SkillsWrapper>
          <Icon iconId="figma" height="83" width="55" viewBox="0 0 55 83" />
          <Icon iconId="html" height="81" width="72" viewBox="0 0 72 81" />
          <Icon iconId="css" height="74" width="65" viewBox="0 0 65 74" />
          <Icon iconId="sass" height="75" width="100" viewBox="0 0 100 75" />
          <Icon iconId="react" height="89" width="100" viewBox="0 0 100 93" />
        </SkillsWrapper>
      </Contrainer>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background: rgb(0, 0, 0);
  padding: 20px;
`;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 550px) {
    flex-grow: 1;
    gap: 20px;
  }
`;
