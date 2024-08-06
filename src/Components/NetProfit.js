import React from 'react';
import styled from 'styled-components';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Container = styled.div`
  background-color: #282a36;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
  color: white;
`;

const Value = styled.p`
  font-size: 2rem;
  margin: 0;
  color: white;
`;

const Change = styled.span`
  color: #4caf50;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const CircularContainer = styled.div`
  width: 110px;  
  height: 170px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CircularText = styled.div`
  color: white;
  font-size: 0.9rem;  
  font-weight: bold;
  text-align: center;
`;

const CircularSubtext = styled.div`
  color: white;
  font-size: 0.7rem;  
  text-align: center;
`;

const Note = styled.p`
  font-size: 0.7rem; 
  color: #bbb;
  margin: 0;
  margin-top: 0.5rem; 
  text-align: center;
`;

const NetProfit = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Net Profit</Title>
        <Value>$6759.25</Value>
        <Change>▲ 3%</Change>
      </TextContainer>
      <CircularContainer>
        <CircularProgressbarWithChildren
          value={70}
          styles={buildStyles({
            pathColor: '#3498db',
            trailColor: '#44475a',
          })}
        >
          <CircularText>70%</CircularText>
          <CircularSubtext>Goal Completed</CircularSubtext>
        </CircularProgressbarWithChildren>
        <Note>*The values here have been rounded off.</Note>
      </CircularContainer>
    </Container>
  );
};

export default NetProfit;
