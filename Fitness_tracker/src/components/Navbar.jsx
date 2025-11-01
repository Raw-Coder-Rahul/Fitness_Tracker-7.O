import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as LinkR, NavLink as RouterNavLink } from 'react-router-dom';
import LogoImg from '../../public/images/logo.png';
import { MenuRounded, Close } from '@mui/icons-material';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.nav_bg};
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: ${({ theme }) => theme.shadow};
  border-bottom: 1px solid ${({ theme }) => theme.border_secondary};
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};

  @media screen and (max-width: 768px) {
    display: ${({ drawerOpen }) => (drawerOpen ? 'none' : 'flex')};
  }
`;

const SidebarLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  margin-top: auto;
  padding-top: 40px;
`;

const Logo = styled.img`
  height: 42px;
`;

const MobileIcon = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const SideDrawer = styled.div`
  position: fixed;
  top: 80px;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 260px;
  height: calc(100vh - 80px);
  background-color: ${({ theme }) => theme.nav_bg + 'F2'};
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  padding: 24px;
  transition: left 0.3s ease-in-out;
  z-index: 999;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const CloseIcon = styled.div`
  align-self: flex-end;
  cursor: pointer;
  margin-bottom: 24px;
`;

const DrawerLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const NavItem = styled(RouterNavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  transition: color 0.2s ease-in-out;

  &.active {
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
    border-left: 4px solid ${({ theme }) => theme.primary};
    padding-left: 8px;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 20px;
    right: 24px;

    // Hide logout on small screens
    .logout-btn {
      display: none;
    }
  }
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
`;

const TextButton = styled.div`
  text-align: center;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
   &.mobile-logout {
    @media screen and (min-width: 769px) {
      display: none;
    }
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav>
        <LeftGroup>
          <MobileIcon isOpen={isOpen} onClick={() => setIsOpen(true)}>
            <MenuRounded />
          </MobileIcon>

          <NavLogo to="/" drawerOpen={isOpen}>
            <Logo src={LogoImg} alt="Fitness Tracker Logo" />
            FitnessTracker
          </NavLogo>
        </LeftGroup>

        <NavMenu>
          <NavItem to="/" exact="true">Dashboard</NavItem>
          <NavItem to="/workouts">Workouts</NavItem>
          <NavItem to="/tutorials">Tutorials</NavItem>
          <NavItem to="/progress">Blogs</NavItem>
          <NavItem to="/contact">Contact Us</NavItem>
        </NavMenu>

        <UserContainer>
          <Avatar />
          <TextButton className="logout-btn">Logout</TextButton>
        </UserContainer>
      </Nav>

      <SideDrawer isOpen={isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)}>
          <Close />
        </CloseIcon>

        <DrawerLinks>
          <NavItem to="/" onClick={() => setIsOpen(false)}>Dashboard</NavItem>
          <NavItem to="/workouts" onClick={() => setIsOpen(false)}>Workouts</NavItem>
          <NavItem to="/tutorials" onClick={() => setIsOpen(false)}>Tutorials</NavItem>
          <NavItem to="/progress" onClick={() => setIsOpen(false)}>Blogs</NavItem>
          <NavItem to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavItem>

          {/* Show logout only on small screens */}
          <TextButton className="mobile-logout" onClick={() => setIsOpen(false)}>Logout</TextButton>
        </DrawerLinks>

        <SidebarLogo to="/">
          <Logo src={LogoImg} alt="Fitness Tracker Logo" />
          FitnessTracker
        </SidebarLogo>
      </SideDrawer>
    </>
  );
}

export default Navbar;