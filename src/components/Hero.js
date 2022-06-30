import styled from "styled-components";
import { colors } from "../styles/colors";
import { fonts, typography } from "../styles/typography";
import { Heading } from "./Typography";

function Hero() {
  return (
    <ContainerHero>
      <p>Hola mi nombre es</p>
      <Heading color={colors.green[100]} size={typography.head.h2}>Katerin Arellano</Heading>
      <Title color={colors.green[100]} size={typography.head.h2}>Frontend Developer</Title>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <div>
      </div>
    </ContainerHero>
  )
}

const ContainerHero = styled.div`
  padding: 44px 0;
  text-align: center;
`;

const Title = styled(Heading)`
  line-height: 2px;
`

export default Hero;