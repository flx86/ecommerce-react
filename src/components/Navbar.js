import React from "react";
import styled from "styled-components";

const NavbarStyled = styled.nav`
  background: var(--clr-primary);
  width: 100%;
  height: 60px;
  color: var(--clr-black);
  line-height: 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const NavbarContainer = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  font-size: 3.2rem;
  font-weight: 700;
  cursor: pointer;
`;

const NavigationLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const Link = styled.li`
  font-size: 1.8rem;
  color: var(--clr-black);
  margin: 0 1rem;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

const Navbar = () => {
  return (
    <NavbarStyled>
      <NavbarContainer>
        <LogoContainer>Computers</LogoContainer>
        <NavigationLinks>
          <Link>About</Link>
          <Link>Stores</Link>
          <Link>Contact</Link>
        </NavigationLinks>
      </NavbarContainer>
    </NavbarStyled>
  );
};

export default Navbar;
