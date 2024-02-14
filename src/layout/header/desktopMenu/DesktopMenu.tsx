import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../styles/Themes";
import { Link } from "react-scroll";

export const DesktopMenu = () => {
  return (
    <NavMenu>
      <ul>
        <li>
          <Link smooth={true} to="main">
            Home
          </Link>
        </li>
        <li>
          <Link smooth={true} to="experience">
            About
          </Link>
        </li>
        <li>
          <Link smooth={true} to="reviews">
            Services
          </Link>
        </li>
        <li>
          <Link smooth={true} to="contact">
            Contact
          </Link>
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

      &:hover {
        background-color: rgb(103, 108, 219);
      }
    }
  }
`;
