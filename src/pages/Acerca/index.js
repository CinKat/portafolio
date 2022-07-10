import styled from "styled-components";
import SkillCards from "../../components/SkillCards";
import Description from "../../components/Description";
import { Text } from "../../components/Typography";


function Acerca() {
  return (
    <Container>
      <Description />
      <Text size="subtitle3" weight="700">Mis habilidades</Text>
      <SkillCards/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;
`

export default Acerca;