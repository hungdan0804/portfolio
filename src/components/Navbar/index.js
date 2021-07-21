import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollAction, setScrollAction] = useState(false);

  const onScroll = () => {
    if (window.scrollY >= 80) {
      setScrollAction(true);
    } else {
      setScrollAction(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollAction={scrollAction}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Portfolio
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="About"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="Projects"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="Contact"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
