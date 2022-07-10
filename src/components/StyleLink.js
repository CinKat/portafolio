import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../styles/colors";
import { fonts, typography } from "../styles/typography";
import { Text } from "./Typography";


export function StyleLink({ icon, children, ...props }) {
  return (
    <CustomLink to={props.to} {...props}>
      {children}
      {icon}
    </CustomLink>
  )
}

export function Button({ beforeIcon, afterIcon, children, ...props }) {
  return (
    <StyleButton href={props.href} download={props.download}>
      {beforeIcon}
      <Text color={colors.orange[100]}>{children}</Text>
      {afterIcon}
    </StyleButton>
  )
}

function typeStyles(type) {
  switch (type) {
    case "secondary":
      return `
        background-color: ${colors.orange[100]};
        color:${colors.white};
      `
    default:
      break;
  }
}

const StyleButton = styled.a`
  display: flex;
  width: fit-content;
  background-color: transparent;
  border: 1px solid ${colors.orange[100]};
  border-radius: 2px;
  padding: 0.5rem 0.6rem;
  justify-content: center;
  align-items: center;
  gap:0.3rem;
  text-decoration: none;
`;

const CustomLink = styled(Link)`
  display: flex;
  width: fit-content;
  background-color: transparent;
  border: 1px solid ${colors.orange[100]};
  border-radius: 2px;
  padding: 0.5rem 0.6rem;
  justify-content: center;
  align-items: center;
  gap:0.3rem;
  text-decoration: none;
  font-family: ${fonts.secondary};
  color:${colors.orange[100]};
  font-weight: 400;
  ${typography.text.button2};
  letter-spacing: 1px;


  ${(props) => typeStyles(props.type)};
`;