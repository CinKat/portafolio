import { Heading, Text } from "../../components/Typography";
import { colors } from "../../styles/colors";
// import Avatar from "../../assets/img/Avatar.jpg"
import styled from "styled-components";
import { Button, StyleLink } from "../../components/StyleLink";
import CV from "../../assets/documents/cv.pdf";

function Acerca() {
  return (
    <>
      <Heading color={colors.green[100]}>Katerin Arellano</Heading>
      <StyleImg />
      <Text>Soy Frontend Developer, actualmente vivo en Lima - Perú.</Text>
      <Text>Me agrada la idea de trabajar en equipo, pienso que es una manera de conectar con nuevas habilidades y de brindar mi conocimiento al equipo con el fin de mejorar la productividad en el desarrollo de algun producto digital. Me gusta descubrir cosas nuevas a diario y ser un activo valioso en cualquier equipo en el que me desarrolle, por lo que estoy aprendiendo constantemente e investigando acerca de las nuevas tendencias.</Text>
      <Text>Trato de buscar todo el Feedback posible en los proyectos, con el fin de mejorar y poder hacer diseños que no solo sean atractivos esteticamente sino que sean accesibles y funcionales por lo que me gusta trabajar muy de la mano con los stakeholders.</Text>
      <StyleLink to="/portafolio">Ver proyectos</StyleLink>
      <Button href={CV}>Descargar CV</Button>
    </>
  )
}

const StyleButton = styled.a`
  background-color: ${colors.green[100]};
  color: white;
`
const StyleImg = styled.div`
  width: 11.25rem;
  height: 12.5rem;
  background: linear-gradient(0deg, rgba(210, 65, 54, 0.32), rgba(210, 65, 54, 0.32)),url('/Avatar.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  border: 1px solid ${colors.black[100]};
  object-fit: contain;
  border-radius: 100px 0px;
`

export default Acerca;