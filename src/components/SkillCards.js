import styled from "styled-components";
import { colors } from "../styles/colors";
import { Heading, Text } from "./Typography";
import Phone from "../assets/icon/phone.svg";

function SkillCards({ number }) {
  const skills = [
    {
      title: "Responsive design",
      image: Phone,
      body: "Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de como implementarlos de manera efectiva en cualquier proyecto."
    },
    {
      title: "Responsive design",
      image: Phone,
      body: "Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de como implementarlos de manera efectiva en cualquier proyecto."
    },
    {
      title: "Responsive design",
      image: Phone,
      body: "Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de como implementarlos de manera efectiva en cualquier proyecto."
    },
    {
      title: "Responsive design",
      image: Phone,
      body: "Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de como implementarlos de manera efectiva en cualquier proyecto."
    },
    {
      title: "Responsive design",
      image: Phone,
      body: "Con mi experiencia en patrones de diseño responsive tengo una visión clara acerca de como implementarlos de manera efectiva en cualquier proyecto."
    },
  ]
  number = !number ? skills.length : number;
  return (

    <Wrapper>
      {skills.map((item, index) => (
        index + 1 <= number ? <ContainerCard key={item.title}>
          <StyleIcon src={item.image} />
          <Heading size="h4" weight="600" spacing="0.25px">{item.title}</Heading>
          <Text size="body4">{item.body}</Text>
        </ContainerCard> : ""

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
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap:0.9rem;
  background: ${colors.yellow[200]};
  border-radius:0.5rem;
`
const StyleIcon = styled.img`
  width:3.12rem;
  height:3.12rem;
`
export default SkillCards;