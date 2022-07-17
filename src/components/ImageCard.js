import { Link } from "react-router-dom";
import styled from "styled-components";
import AppFood from "../assets/img/AppFood.png"
import { colors } from "../styles/colors";
import { Text } from "./Typography";

function ImageCard() {
  return (
    <Image>
      <StyleImage src={AppFood} />
      <ImageOverlay to="/portafolio">
        <Text color="white">Designing Dashboards</Text>
      </ImageOverlay>
    </Image>
  )
}

const Image = styled.div`
  position: relative;
  width: 20.3rem;
`
const StyleImage = styled.img`
  width: 100%;
`
const ImageOverlay = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.orange[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  text-decoration: none;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
export default ImageCard;