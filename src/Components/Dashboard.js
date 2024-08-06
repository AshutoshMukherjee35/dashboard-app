import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Add vertical scrolling */
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
