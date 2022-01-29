import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavbarComp = () => {
  return (
    <div>
      <Navbar color="dark" expand="md" dark>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/mahasiswa/">Mahasiswa</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Dede Irwanto</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
