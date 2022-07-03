import styled from "styled-components";
import { colors } from "../styles/colors";
import { fonts, typography } from "../styles/typography";


export const Heading = styled.h1`
  font-family: ${fonts.primary};
  ${(props) => typography.head[props.size] || typography.head.h2};
  font-weight: ${(props) => props.weight || "700"};
  color: ${(props) => props.color || "inherit"};
  font-style: normal;
`
export const Text = styled.p`
  font-family: ${fonts.secondary};
  ${(props) => typography.text[props.size] || typography.text.body2};
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || colors.black[100]};
  letter-spacing: ${(props) => props.space || "1px"};
  font-style: normal;
`