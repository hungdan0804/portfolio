import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;

  background: #5cdb95;

  display: grid;
  align-items: center;

  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;

  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #05386b;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;

  background: transparent;

  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #05386b;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);

  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;

  color: #05386b;

  transition: 0.2s ease-in-out;

  &:hover {
    color: #379683;
    border-bottom: 3px solid #379683;
    transition: 0.1s ease-in-out;
  }
`;
