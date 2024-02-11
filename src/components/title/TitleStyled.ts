import { styled } from "styled-components";

type TitleStyledPropsType = {
  fontSize?: string;
  color?: string;
  lineHeight?: string;
};

export const TitleStyled = styled.h2<TitleStyledPropsType>`
  display: block;
  font-family: Playfair Display;
  font-weight: 700;
  line-height: ${(props) => props.lineHeight || "1.2"};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color || "#FFFFFF"};
`;
