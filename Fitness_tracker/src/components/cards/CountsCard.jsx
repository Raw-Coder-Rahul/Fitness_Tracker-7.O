import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  flex: 1;
  min-width: 215px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 8px;
  display: flex;
  gap: 6px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.shadow + 15};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const Value = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 14px;
  }
  display: flex;
  align-items: end;
  gap: 8px;
`;
const Unit = styled.div`
  font-size: 16px;
  margin-bottom: 2px;
`;
const Span = styled.div`
  font-size: 14px;
  margin-bottom: 3px;
  font-weight: 500;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 840px) {
    font-size: 10px;
  }
  color: ${(props) => (props.positive ? '#46af4aff' : '#f44336')};
`;
const Icon = styled.div`
  height: fit-content;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  ${({ color, bg }) => `
    color: ${color};
    background-color: ${bg};
  `}
`;

const Desc = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 6px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 840px) {
    font-size: 12px;
  }
`;

const CountsCard = ({ item , data}) => {
  return (
    <Card>
      <Left>
        <Title>{item.name}</Title>
        <Value>
          {data && data[item.key].toFixed(2)}
          <Unit>{item.unit}</Unit>
          <Span positive>(+10%)</Span>
        </Value>
        <Desc>{item.desc}</Desc>
      </Left>
      <Icon color={item.color} bg={item.lightColor}>{item.icon}</Icon>
    </Card>
  )
}

export default CountsCard;