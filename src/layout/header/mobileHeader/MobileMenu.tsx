import React, { useState } from "react";
import { css, styled } from "styled-components";
import MenuBtn from "./../../../assets/images/menu-svgrepo-com.svg";
import { theme } from "../../../styles/Themes";

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <BurgerButtonIcon src={MenuBtn} />
      </BurgerButton>
      <MobileMenuPopop isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
        </ul>
      </MobileMenuPopop>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  background: rgba(34, 42, 54, 0.95);
`;

const MobileMenuPopop = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  background: rgba(34, 42, 54, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 0.8s ease-in-out;

  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.8s ease-in-out;

    & a {
      color: ${theme.mainFont};
      font-size: 20px;
      font-weight: 500;

      &:hover {
        background-color: rgb(103, 108, 219);
      }
    }
  }

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0);
      & ul {
        gap: 70px;
      }
    `}
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 0px;
  right: -90px;
  width: 200px;
  height: 100px;
  z-index: 4;
  background-color: transparent;
`;

const BurgerButtonIcon = styled.img`
  width: 200px;
  height: 100px;
`;
