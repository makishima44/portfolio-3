import React from "react";
import { styled } from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper justify="space-between">
        {" "}
        <Logo />
        <Menu />
        <StyledButton>
          <a href="">Contact Me</a>
        </StyledButton>
      </FlexWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header``;
const StyledButton = styled.button``;
