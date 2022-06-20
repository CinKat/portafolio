import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../styles/colors";
import HamburgerButton from "./Hamburger";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
    <NavContainer>
      <Logo>CKATERIN</Logo>
      <div className={`links ${clicked ? 'active' : ''}`}>
        <a href="#">Inicio</a>
        <a href="#">Acerca de mi</a>
        <a href="#">Potafólio</a>
        <a href="#">Contacto</a>
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
const Logo = styled.h1`
  letter-spacing: 1px;
  color: ${colors.green[100]};
  font-size: 22px;
`