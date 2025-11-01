import { PieChart } from '@mui/x-charts';
import React from 'react';
import styled from 'styled-components';

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
const CategoryChartCard = ({data}) => {
  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      {data?.pieChartData && (
        <PieChart 
          series={[{ 
            data: data?.pieChartData,
            innerRadius: 30,
            paddingAngle: 2,
            cornerRadius: 5,
           }]}
          height={
            300
          }
        />
      )}
    </Card>
  )
}

export default CategoryChartCard;