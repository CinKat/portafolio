import styled from "styled-components";
import { colors } from "../styles/colors";
import { fonts } from "../styles/typography";
import { Heading } from "./Typography";

function Hero() {
  return (
    <ContainerHero>
      <p>Hola mi nombre es</p>
      <Heading>Katerin Arellano</Heading>
      <Heading2>Frontend Developer</Heading2>
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
const Heading2 = styled.div`
  font-family: ${fonts.secondary};
  font-size: 30px;
  font-weight: 700;
  color: ${colors.green[100]}
`

export default Hero;