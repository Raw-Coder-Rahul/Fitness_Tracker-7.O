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
  color: ${({ theme }) => theme.text_secondary};
  background-color: linear-gradient(90deg, transparent, transparent 50%, ${({ theme }) => theme.background} 50%);
`;

const BaseInput = styled.input`
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

const TextArea = styled.textarea`
  padding: 14px 18px;
  font-size: 15px;
  border: 1px solid ${({ theme }) => theme.border || '#d1d5db'};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.input_background || '#f3f4f6'};
  color: ${({ theme }) => theme.text_primary};
  transition: border-color 0.3s ease, background-color 0.3s ease;
  resize: vertical;
  white-space: pre-wrap;
  overflow-y: auto;
  min-height: 240px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary || '#6366f1'};
    background-color: #fff;
  }

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary || '#9ca3af'};
    white-space: pre-wrap;
  }
`;

function TextInput({ label, placeholder, type = 'text', value, onChange, textArea = false, rows = 6 }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      {textArea ? (
        <TextArea
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <BaseInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </InputContainer>
  );
}

export default TextInput;