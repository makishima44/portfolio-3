import React from "react";
import { styled } from "styled-components";
import { theme } from "../../styles/Themes";

export const Menu = () => {
  return (
    <NavMenu>
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
    </NavMenu>
  );
};

const NavMenu = styled.nav`
  ul {
    display: flex;
    gap: 50px;

    & a {
      color: ${theme.mainFont};
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
