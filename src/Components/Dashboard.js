import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <ContentContainer>
        <Header />
        <MainContent />
      </ContentContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
