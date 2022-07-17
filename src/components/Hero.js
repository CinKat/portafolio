import styled from "styled-components";
import { colors } from "../styles/colors";
import { Heading, Text } from "./Typography";
import Social from "./Social";

function Hero() {
  return (
    <ContainerHero>
      <Text>Hola mi nombre es</Text>
      <Heading color={colors.green[100]}>Katerin Arellano</Heading>
      <Heading color={colors.green[100]}>Frontend Developer</Heading>
      <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
      <Social />
    </ContainerHero>
  )
}

const ContainerHero = styled.div`
  padding-top: 2.75rem;
  text-align: center;
`;

export default Hero;