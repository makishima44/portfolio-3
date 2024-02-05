import React from "react";
import { styled } from "styled-components";

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
    gap: 20px;
  }
`;
