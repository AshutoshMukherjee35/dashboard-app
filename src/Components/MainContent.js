import React from 'react';
import styled from 'styled-components';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import NetProfit from './NetProfit';
import GoalsPopularDishesMenus from './GoalsPopularDishesMenus';

const MainContainer = styled.main`
  flex: 1;
  padding: 1rem;
  background-color: #1f1f30;
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Card = styled.div`
  background-color: #282a36;
  padding: 1rem;
  border-radius: 0.5rem;
  flex: 1;
  min-width: 200px; /* Ensure cards don't get too small */
  height: 10rem;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  margin: 0;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardText = styled.p`
  margin: 0;
`;

const CardIndicator = styled.span`
  font-size: 0.875rem;
  color: #4caf50; /* This can change based on status */
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActivitySection = styled.div`
  margin-top: 2rem; /* Add space above Activity section */
`;

const MainContent = () => {
  return (
    <MainContainer>
      <div>
        <CardsContainer>
          <Card>
            <CardHeader>
              <CardTitle>Total Orders</CardTitle>
              <CardIndicator>+3%</CardIndicator>
            </CardHeader>
            <CardContent>
              <CardText>75</CardText>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Delivered</CardTitle>
              <CardIndicator>+3%</CardIndicator>
            </CardHeader>
            <CardContent>
              <CardText>70</CardText>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Cancelled</CardTitle>
              <CardIndicator>-3%</CardIndicator>
            </CardHeader>
            <CardContent>
              <CardText>05</CardText>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
              <CardIndicator>-3%</CardIndicator>
            </CardHeader>
            <CardContent>
              <CardText>$12k</CardText>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Net Profit</CardTitle>
              <CardIndicator>+3%</CardIndicator>
            </CardHeader>
            <CardContent>
              <CardText>$6759.25</CardText>
            </CardContent>
          </Card>
        </CardsContainer>
        <ActivitySection>
          <ActivityChart />
          <RecentOrders />
        </ActivitySection>
      </div>
      <RightColumn>
        <NetProfit />
        <GoalsPopularDishesMenus />
        <CustomerFeedback />
      </RightColumn>
    </MainContainer>
  );
};

export default MainContent;
