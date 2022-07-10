import styled from "styled-components";
import { colors } from "../styles/colors";
import { fonts, typography } from "../styles/typography";
import { Button, StyleLink } from "./StyleLink";
import { Heading } from "./Typography";
import CV from "../assets/documents/cv.pdf";

const download = <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M0.5 15C0.5 14.4477 0.947715 14 1.5 14H13.5C14.0523 14 14.5 14.4477 14.5 15C14.5 15.5523 14.0523 16 13.5 16H1.5C0.947715 16 0.5 15.5523 0.5 15ZM3.79289 7.29289C4.18342 6.90237 4.81658 6.90237 5.20711 7.29289L6.5 8.58579L6.5 1C6.5 0.447716 6.94771 2.41411e-08 7.5 0C8.05228 -2.41411e-08 8.5 0.447715 8.5 1L8.5 8.58579L9.79289 7.29289C10.1834 6.90237 10.8166 6.90237 11.2071 7.29289C11.5976 7.68342 11.5976 8.31658 11.2071 8.70711L8.20711 11.7071C8.01957 11.8946 7.76522 12 7.5 12C7.23478 12 6.98043 11.8946 6.79289 11.7071L3.79289 8.70711C3.40237 8.31658 3.40237 7.68342 3.79289 7.29289Z" fill="#D24136" />
</svg>

function Description() {
  return (
    <>
      <Title color={colors.green[100]}>Katerin Arellano</Title>
      <StyleImg />
      <Paragraph>
        <p>Soy Frontend Developer, actualmente vivo en Lima - Perú.</p>
        <p>Me agrada la idea de trabajar en equipo, pienso que es una manera de conectar con nuevas habilidades y de brindar mi conocimiento al equipo con el fin de mejorar la productividad en el desarrollo de algun producto digital. Me gusta descubrir cosas nuevas a diario y ser un activo valioso en cualquier equipo en el que me desarrolle, por lo que estoy aprendiendo constantemente e investigando acerca de las nuevas tendencias.</p>
        <p>Trato de buscar todo el Feedback posible en los proyectos, con el fin de mejorar y poder hacer diseños que no solo sean atractivos esteticamente sino que sean accesibles y funcionales por lo que me gusta trabajar muy de la mano con los stakeholders.</p>
      </Paragraph>
      <ButtonContainer>
        <StyleLink to="/portafolio" type="secondary">Ver proyectos</StyleLink>
        <Button href={CV} download="download" beforeIcon={download}>Descargar CV</Button>
      </ButtonContainer>
    </>
  )
}

const Title = styled(Heading)`
  padding-top: 2.50rem;
`
const Paragraph = styled.div`
  font-family: ${fonts.secondary};
  ${typography.text.body2};
  letter-spacing: 1px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;  
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
const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0.5rem 1.25rem;
`
export default Description;