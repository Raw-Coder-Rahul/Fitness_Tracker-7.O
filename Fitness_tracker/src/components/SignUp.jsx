import React from 'react'
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

function SignUp() {
  return (
    <Container>
      <div>
        <Title>Create New Account</Title>
        <Span>Please enter details to create an account.</Span>
      </div>
      <div style=
        {{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}>
        <TextInput
          label="Full Name"
          placeholder="Enter your full name"
          type="text"
        />
        <TextInput
          label="Email Address"
          placeholder="Enter your email"
          type="email"
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <TextInput
          label="Confirm Password"
          placeholder="Confirm password"
          type="password"
        />
        <Button text="Sign Up" />
      </div>
    </Container>
  )
}

export default SignUp;