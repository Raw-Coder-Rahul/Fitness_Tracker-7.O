import React, { useState } from 'react';
import styled from 'styled-components';
import LogoImage from '../../public/images/logo.png';
import AuthImage from '../../public/images/fitness2.jpg';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const Container = styled.div`
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  position: absolute;
  width: 70px;
  top: 40px;
  left: 60px;
  z-index: 10;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;


const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const TextButton = styled.span`
  padding: 5px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.3s ease;
`;

const Authentication = () => {
    const [isLogin, setIsLogin] = useState(false);
  return (
    <Container>
      <Left>
        <Logo src={LogoImage} alt="Fitness Tracker Logo" />
        <Image src={AuthImage} alt="Authentication Illustration" />
      </Left>
      <Right>
        {!isLogin ? (
          <>
            <SignIn />
            <Text>Don't have an account?
              <TextButton onClick={() => setIsLogin(true)}>
                Sign Up
              </TextButton>
            </Text>
          </>) : ( 
          <>
            <SignUp />
            <Text>Already have an account?
              <TextButton onClick={() => setIsLogin(false)}>
                Sign In
              </TextButton>
            </Text>
          </>
        )}
      </Right>
    </Container>
  );
};

export default Authentication;