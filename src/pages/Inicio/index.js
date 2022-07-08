import Hero from "../../components/Hero";
import Card from "../../components/Card";
import ImageCard from "../../components/ImageCard";
import { StyleLink } from "../../components/StyleLink"
import styled from "@emotion/styled";
import { Text } from "../../components/Typography";

const arrow = <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.1927 1.34607L17.1172 5M17.1172 5L11.1927 8.65394M17.1172 5L1.88281 5" stroke="#D24136" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>;

function Inicio() {
  return (
    <Container>
      <Hero />
      <Text size="subtitle3" weight="700">Mis habilidades</Text>
      <Card />
      <StyleLink children="Ver más skills" to="/acerca" icon={arrow} />
      <Text size="subtitle3" weight="700">Algunos de mis proyectos</Text>
      <ImageCard />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;
`
export default Inicio;