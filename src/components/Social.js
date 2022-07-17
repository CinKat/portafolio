import Icon from "../assets/icon/icon";

const socialMedia = [
  {
    name: "Twitter",
    url: "https://www.linkedin.com/in/ckaterinarellano/",
  },
  {
    name: "Github",
    url: "https://www.linkedin.com/in/ckaterinarellano/",
  },
  {
    name: "Linkedln",
    url: "https://www.linkedin.com/in/ckaterinarellano/",
  },
  {
    name: "Instagram",
    url: "https://www.linkedin.com/in/ckaterinarellano/",
  },
]

function Social() {
  return (
    <>
      {socialMedia.map(({ name, url }) => (
        <a href={url} target="_blank">
          <Icon name={name} />
        </a>
      ))}
    </>
  )
}

export default Social;