import styled from "styled-components";
import { colors } from "../styles/colors";
import { Heading, Text } from "./Typography";
import Twiter from "../assets/icon/twitter.svg";
import Github from "../assets/icon/github.svg";
import Linkedln from "../assets/icon/linkedln.svg";
import Instagram from "../assets/icon/instagram.svg";
import Icon from "../assets/icon/icon";
import { Button } from "./StyleLink";
import Social from "./Social";

function Hero() {
  return (
    <ContainerHero>
      <Text>Hola mi nombre es</Text>
      <Heading color={colors.green[100]}>Katerin Arellano</Heading>
      <Heading color={colors.green[100]}>Frontend Developer</Heading>
      <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
      <SocialMedia>
        <Social />
      </SocialMedia>
    </ContainerHero>
  )
}

const ContainerHero = styled.div`
  padding-top: 2.75rem;
  text-align: center;
`;
const StyleIcon = styled(Icon)`
  width: 2.31rem;
  height: 2.36rem;
`
const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap:0.75rem;
  padding: 1.8rem;
`

// const Title = styled(Heading)`
//   line-height: 10px;
// `

export default Hero;