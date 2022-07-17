import styled from "styled-components";
import { Text } from "./Typography";

function Chip() {
  return (
    <Container>
      <StyleChip size="caption2">JavaScript</StyleChip>
      <StyleChip size="caption2">SQL</StyleChip>
    </Container>
  )
}

const StyleChip = styled(Text)`
  padding: 0.12rem 0.6rem;
  background: rgba(210, 65, 54, 0.38);
  border-radius: 0.6rem;
  color: black;
`
const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`
export default Chip;