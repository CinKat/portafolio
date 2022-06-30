import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../styles/colors";
import HamburgerButton from "./Hamburger";
import Logo from "../assets/icon/logo.svg"

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
    <NavContainer>
      <img src={Logo} />
      <div className={`links ${clicked ? 'active' : ''}`}>
        <a href="#">inicio</a>
        <a href="#">acerca de mi</a>
        <a href="#">potafólio</a>
        <a href="#">contacto</a>
      </div>
      <HamburgerButton clicked={clicked} handleClick={handleClick} />
    </NavContainer>
  )
}

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .links {
    display: none;
  }
  .links.active {
    width: 100%;
    display:block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top:30%;
    left: 0;
    right: 0;
    text-align: center;
    letter-spacing: 2px;
    color: ${colors.black[100]}
  }

  a {
    display: block;
    text-decoration: none;
    color: black;
  }
`
