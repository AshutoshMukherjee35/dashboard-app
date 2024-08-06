import React from 'react';
import styled from 'styled-components';
import ChartImage from '../images/new-graph.png'; 

const ChartContainer = styled.div`
  background-color: #282a36;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  height: 250px;
`;

const Header2 = styled.h2`
  margin-bottom: 1rem;
`

const ChartPlaceholder = styled.div`
  height: 10rem;
  background-color: #1f1f30;
  background-image: url(${ChartImage});
  background-size: cover;
  background-position: center;
`;

const ActivityChart = () => {
  return (
    <ChartContainer>
      <Header2>Activity</Header2>
      <ChartPlaceholder />
    </ChartContainer>
  );
};

export default ActivityChart;
