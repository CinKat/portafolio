import styled from "styled-components";
import { colors } from "../styles/colors";
import { Heading, Text } from "./Typography";

function StackCards({ icon }) {
  return (
    <ContainerCard>
      {icon}
      <Heading size="h3">Photoshop</Heading>
      <Text size="body4">Uso photoshop desde tiempos memoriales, mis conocimientos son profundos.</Text>
    </ContainerCard>
  )
}

const ContainerCard = styled.div`
  padding: 3.6rem 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:0.9rem;
  border-radius:0.5rem;
  border: 1px solid ${colors.orange[100]};
`
export default StackCards;