import AppFood from "../assets/img/AppFood.png";
import Folder from "../assets/icon/folder.svg";
import Github from "../assets/icon/LineGithub.svg";
import Share from "../assets/icon/share.svg";
import styled from "styled-components";
import { Heading, Text } from "./Typography";
import { colors } from "../styles/colors";
import Chip from "./Chip";

function ProyectCard() {
  return (
    <Container>
      <img src={AppFood} />
      <Descriptions>
        <IconsList>
          <img src={Folder} />
          <Links>
            <StyleIcon src={Github} />
            <StyleIcon src={Share} />
          </Links>
        </IconsList>
        <Heading size="h4">CalenCli</Heading>
        <Text size="caption" color={`${colors.gray}`}>
          Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
          Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
        </Text>
        <Chip />
      </Descriptions>
    </Container>
  )
}

const Descriptions = styled.div`
  background-color: ${colors.yellow[200]};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor:pointer;
  &:hover {
    color: ${colors.orange[100]};
  }
`
const IconsList = styled.div`
  display: flex;
  justify-content: space-between;
`
const Links = styled.div`
  display: flex;
  gap: 0.5rem;
`
const Container = styled.div`
  padding: 3.37rem 0 3.37rem 0;
`
const StyleIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`

export default ProyectCard;