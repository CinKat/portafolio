import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { Text } from "./Typography";


function Button({ icon, children, ...props }) {
  return (
    <StyledButton>
      <Text color={colors.orange[100]}>{children}</Text>
      {icon}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  width: fit-content;
  background-color: transparent;
  border: 1px solid ${colors.orange[100]};
  border-radius: 2px;
  padding: 0.5rem 0.6rem;
  justify-content: center;
  align-items: center;
  gap:0.3rem;
  margin-top: 2.31rem;
`
export default Button;