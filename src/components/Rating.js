import Star from "../assets/icon/star.svg";
import LineStar from "../assets/icon/LinearStar.svg";
import styled from "styled-components";

function Rating({ rate }) {
  return (
    <StyleRating>
      {[...Array(5)].map((item, index) => {
        return index <= rate ? <StyleImg src={Star} /> : <StyleImg src={LineStar} />
      })}
    </StyleRating>
  )
}

const StyleRating = styled.div`
  display: flex;
  gap: 0.6rem;
`
const StyleImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

export default Rating;