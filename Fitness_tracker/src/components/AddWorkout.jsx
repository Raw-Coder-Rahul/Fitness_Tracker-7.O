import React from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 8px;
  display: flex;
  gap: 6px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.shadow + 15};
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const AddWorkout = ({workout, setWorkout}) => {
  return (
    <Card>
      <Title>Add New Workout</Title>
      <TextInput
        label="Workout"
        textArea
        rows={10}
        placeholder={`Enter workout details. In this format:
#Category
- WorkOut Name
- Duration
- Sets/Reps
- Weight`}
        value={workout}
        handleChange={(e) => setWorkout(e.target.value)}
      />
      <Button
        primary
        onClick={() => toast.success('Workout Added!')}
        text="Add Workout"
        small
      />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Card>
  )
}

export default AddWorkout