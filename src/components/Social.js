import styled from "styled-components";
import Icon from "../assets/icon/icon";

const socialMedia = [
  {
    name: "Linkedln",
    url: "https://www.linkedin.com/in/ckaterinarellano/",
  },
  {
    name: "Github",
    url: "https://github.com/CinKat",
  },
  {
    name: "Codepen",
    url: "https://codepen.io/cinkat",
  },
  {
    name: "Codewars",
    url: "https://www.codewars.com/users/CinKat",
  },
]

function Social() {
  return (
    <SocialMedia>
      {socialMedia.map(({ name, url }) => (
        <Link key={name} href={url} target="_blank">
          <Icon name={name} />
        </Link>
      ))}
    </SocialMedia>
  )
}

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap:0.75rem;
  padding: 1.8rem;
`
const Link = styled.a`
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`

export default Social;