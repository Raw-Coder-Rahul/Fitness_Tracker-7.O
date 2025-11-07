import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0px 16px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
`;

const Input = styled.input`
  padding: 12px 16px;
  font-size: 15px;
  border: 1px solid ${({ theme }) => theme.border || '#ccc'};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.input_background || '#f9f9f9'};
  color: ${({ theme }) => theme.text_primary};
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  font-size: 15px;
  border: 1px solid ${({ theme }) => theme.border || '#ccc'};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.input_background || '#f9f9f9'};
  color: ${({ theme }) => theme.text_primary};
  resize: vertical;
  min-height: 120px;
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
`;

const Subtitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Contact = () => {
  const [form, setForm] = useState({
    name: 'Raj Karl',
    email: 'karlfitness21@example.com',
    message: 'Hi FitnessTracker team, I love your app! Just wanted to say thanks for the motivation.',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert(`Thanks for reaching out, ${form.name}! Our team will get back to you soon.`);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact the FitnessTracker Team</Title>

        <Section>
          <Paragraph>
            Whether you’re a beginner or a seasoned athlete, our team at <strong>FitnessTracker</strong> is here to support your journey. Drop us a message and we’ll get back to you as soon as possible.
          </Paragraph>
        </Section>

        <form onSubmit={handleSubmit}>
          <Section>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={form.name} onChange={handleChange} required />

            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />

            <Label htmlFor="message">Message</Label>
            <TextArea id="message" name="message" value={form.message} onChange={handleChange} required />

            <Button type="submit">Send Message</Button>
          </Section>
        </form>

        <Section>
          <Subtitle>📍 Our Location</Subtitle>
          <Paragraph>Kolkata, West Bengal, India</Paragraph>

          <Subtitle>📧 Email</Subtitle>
          <Paragraph>support@fitnesstracker.com</Paragraph>

          <Subtitle>🔗 Connect with Us</Subtitle>
          <Paragraph>
            Instagram | Twitter | YouTube
          </Paragraph>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Contact;