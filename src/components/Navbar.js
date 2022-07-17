import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../styles/colors";
import HamburgerButton from "./Hamburger";
import Logo from "../assets/icon/logo.svg"
import { Link, NavLink } from "react-router-dom";
import { fonts } from "../styles/typography";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => console.log("Hello, World!"), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
    <NavContainer>
      <Link to="/inicio">
        <img src={Logo} />
      </Link>
      <div className={`links ${clicked ? 'active' : ''}`}>
        <NavLink to="/inicio" className={({ isActive }) =>
          isActive ? 'activeStyle' : undefined
        } onClick={handleClick}>inicio</NavLink>
        <NavLink to="/acerca" className={({ isActive }) =>
          isActive ? 'activeStyle' : undefined
        } onClick={handleClick}>acerca de mi</NavLink>
        <NavLink to="/portafolio" className={({ isActive }) =>
          isActive ? 'activeStyle' : undefined
        } onClick={handleClick}>potafólio</NavLink>
        <NavLink to="/contacto" className={({ isActive }) =>
          isActive ? 'activeStyle' : undefined
        } onClick={handleClick}>contacto</NavLink>
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
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap:1.5rem;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top:0;
    left: 0;
    right: 0;
    text-align: center;
    letter-spacing: 3px;
    color: ${colors.black[100]};
    background-color: ${colors.yellow[100]}
  }

  a {
    display: block;
    text-decoration: none;
    color: black;
    font-family: ${fonts.secondary};
    font-weight: 400;
    font-size: 19px;
    &:hover {
      color: ${colors.orange[100]};
    }
  }

  .activeStyle {
    color: ${colors.orange[100]};
  }
`

