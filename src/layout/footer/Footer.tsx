import React from "react";
import { styled } from "styled-components";
import { theme } from "../../styles/Themes";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterTitle>
        Created by<FooterText> Zarror </FooterText>| All Reserved!
      </FooterTitle>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 100px 0 50px;
  background: rgb(0, 0, 0);
`;

const FooterTitle = styled.h3`
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  font-weight: 500;
  line-height: 180%;
  letter-spacing: 0.3px;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const FooterText = styled.span`
  color: ${theme.mainFont};
`;
