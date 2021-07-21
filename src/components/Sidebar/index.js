import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarItem,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink to="About" isOpen={isOpen} onClick={toggle}>
              About
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="Projects" isOpen={isOpen} onClick={toggle}>
              Projects
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="Contact" isOpen={isOpen} onClick={toggle}>
              Contact
            </SidebarLink>
          </SidebarItem>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
