import React from "react";
import { styled } from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Themes";
import { Contrainer } from "../../components/Container";

export const Header = () => {
  return (
    <StyledHeader>
      <Contrainer>
        <FlexWrapper justify="space-between" align="center">
          {" "}
          <Logo />
          <Menu />
          <StyledButton>
            <a href="">Contact Me</a>
          </StyledButton>
        </FlexWrapper>
      </Contrainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
`;
const StyledButton = styled.button`
  width: 160px;
  height: 50px;
  background-color: transparent;
  a {
    color: ${theme.mainFont};
    font-size: 20px;
    font-weight: 500;
  }

  &:hover {
    background-color: rgb(103, 108, 219);
  }
`;
