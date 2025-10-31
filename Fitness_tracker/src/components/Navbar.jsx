import React from 'react'
import styled from 'styled-components'
import { Link as LinkR, NavLink } from 'react-router-dom';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.nav_bg};
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow};
  justify-content: center;
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  border-bottom: 1px solid ${({ theme }) => theme.border_secondary};
  width: 100%;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
`;

const NavLogo = styled(LinkR)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 6px;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;

const Logo = styled.img`
  height: 42px;
`;

function Navbar() {
  return (
    <Nav>
      <MobileIcon></MobileIcon>
      <NavContainer>
        <NavLogo to="/">
          <Logo src="../../public/images/logo.png" alt="Fitness Tracker Logo" />
          FitnessTr
        </NavLogo>
      </NavContainer>
    </Nav>
  )
}

export default Navbar;