import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: #5cdb95;

  opacity: ${({ opacity }) => opacity};
  transition: 0.8s all ease;

  height: 80px;
  margin-top: -80px;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;

  font-size: 1rem;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 80px;
  width: min(90%, 900px);
  z-index: 1;
`;

export const NavLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  align-items: center;

  color: #05386b;

  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;

    transform: translate(-100%, 60%);

    cursor: pointer;
    font-size: 1.8rem;

    color: #05386b;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  list-style: none;

  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled(LinkScroll)`
  height: 60%;
  color: #05386b;

  display: flex;
  align-items: center;

  cursor: pointer;
  text-decoration: none;

  padding: 0 1rem;

  &:hover {
    color: #379683;
    border-bottom: 3px solid #379683;
    transition: 0.1s ease-in-out;
  }
`;
