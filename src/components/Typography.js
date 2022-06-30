import styled from "styled-components";
import { fonts, typography } from "../styles/typography";


export const Heading = styled.h1`
  font-family: ${fonts.primary};
  ${(props) => typography.head[props.size] || typography.head.h3};
  font-weight: ${(props) => props.weight || "700"};
  color: ${(props) => props.color || "inherit"};
  font-style: normal;
`