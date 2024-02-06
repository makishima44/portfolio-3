import React from "react";
import { styled } from "styled-components";
import { theme } from "../../styles/Themes";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterTitle>
        Created by<FooterText>Zarror</FooterText>| All Reserved!
      </FooterTitle>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: rgb(0, 0, 0);
`;

const FooterTitle = styled.h3`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;

const FooterText = styled.span`
  color: ${theme.mainFont};
`;
