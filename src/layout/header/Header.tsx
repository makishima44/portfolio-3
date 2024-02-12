import React from "react";
import { styled } from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Themes";
import { Contrainer } from "../../components/Container";
import { MobileMenu } from "./mobileHeader/MobileMenu";

export const Header: React.FC = () => {
  const [width, setwidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <StyledHeader>
      <Contrainer>
        <FlexWrapper justify="space-between" align="center">
          <Logo>Logo</Logo>
          {width < breakpoint ? <MobileMenu /> : <Menu />}
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

  @media (max-width: 767px) {
    display: none;
  }
`;

const Logo = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 45px;
  color: ${theme.mainFont};
`;
