import styled from "styled-components";
import { colors } from "../styles/colors";
import Rating from "./Rating";
import { Heading, Text } from "./Typography";

const Stack = [
  {
    technology: "Figma",
    resume: "Manejo a la perdección Figma, es una de mis herramientas de diseño preferidas.",
    rate: 4,
  },
  {
    technology: "Figma",
    resume: "Manejo a la perdección Figma, es una de mis herramientas de diseño preferidas.",
    rate: 2,
  },
  {
    technology: "Figma",
    resume: "Manejo a la perdección Figma, es una de mis herramientas de diseño preferidas.",
    rate: 1,
  }, {
    technology: "Figma",
    resume: "Manejo a la perdección Figma, es una de mis herramientas de diseño preferidas.",
    rate: 3,
  }
]

function StackCards({ icon }) {
  return (
    <Wrapper>
      {Stack.map((item) => (
        <ContainerCard key={item.technology}>
          {icon}
          <Heading size="h3">{item.technology}</Heading>
          <Text size="body4">{item.resume}</Text>
          <Rating rate={item.rate} />
        </ContainerCard>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

const ContainerCard = styled.div`
  padding: 3.6rem 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:0.9rem;
  border-radius:0.5rem;
  border: 1px solid ${colors.orange[100]};
  text-align: center;
`
export default StackCards;