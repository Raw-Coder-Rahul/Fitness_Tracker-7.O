import { FitnessCenterRounded, TimelapseRounded } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 400px;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 8px;
  display: flex;
  gap: 6px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.shadow + 15};
  flex-direction: column;
  @media (max-width: 840px) {
    padding: 12px 14px;
  }
`;

const Category = styled.div`
  width: fit-content;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 6px;
  background-color: ${({ theme }) => theme.primary + '22'};
  padding: 4px 8px;
  border-radius: 4px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
`;

const Sets = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary + 'cc'};
  margin-bottom: 12px;
  diasplay: flex;
  gap: 8px;
`;

const Flex = styled.div`
  display: flex;
  gap: 16px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary + 'cc'};
  margin-right: 16px;
  gap: 4px;
`;

const WorkoutCard = () => {
  return (
    <Card>
      <Category>#Legs</Category>
      <Name>Back Squat</Name>
      <Sets>Count : 5sets X 10reps</Sets>
      <Flex>
        <Details>
          <FitnessCenterRounded sx={{fontSize: '16px', color: '#555', marginRight: '6px'}} />
          60kg
        </Details>
        <Details>
          <TimelapseRounded sx={{fontSize: '16px', color: '#555', marginRight: '6px'}} />
          60kg
        </Details>
      </Flex>
    </Card>
  )
}

export default WorkoutCard