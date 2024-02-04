import React from "react";
import { styled } from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Logo } from "../../components/logo/Logo";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
      <StyledButton>
        <a href="">Contact Me</a>
      </StyledButton>
    </StyledHeader>
  );
};

const StyledHeader = styled.header``;
const StyledButton = styled.button``;
