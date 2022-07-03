import Hero from "../../components/Hero";
import Card from "../../components/Card";
import ImageCard from "../../components/ImageCard";
import Button from "../../components/Button"
import styled from "@emotion/styled";

const arrow = <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.1927 1.34607L17.1172 5M17.1172 5L11.1927 8.65394M17.1172 5L1.88281 5" stroke="#D24136" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>;

function Inicio() {
  return (
    <Container>
      <Hero />
      <Card />
      <Button children="Ver más skills" icon={arrow} />
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