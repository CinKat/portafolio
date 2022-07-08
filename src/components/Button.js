import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../styles/colors";
import { Text } from "./Typography";


function StyleLink({ icon, children, ...props }) {
  return (
    <CustomLink to={props.to}>
      <Text color={colors.orange[100]}>{children}</Text>
      {icon}
    </CustomLink>
  )
}

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
`
export default StyleLink;