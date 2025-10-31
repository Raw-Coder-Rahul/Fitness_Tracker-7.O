// TextInput.jsx
import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Input = styled.input`
  padding: 14px 18px;
  font-size: 15px;
  border: 1px solid ${({ theme }) => theme.border || '#d1d5db'};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.input_background || '#f3f4f6'};
  color: ${({ theme }) => theme.text_primary};
  transition: border-color 0.3s ease, background-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary || '#6366f1'};
    background-color: #fff;
  }

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary || '#9ca3af'};
  }
`;

function TextInput({ label, placeholder, type = 'text', value, onChange }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default TextInput;