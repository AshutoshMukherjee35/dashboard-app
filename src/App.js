import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import Header from './Components/Header';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }
`;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden; /* Prevent horizontal overflow */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #212437;
  overflow-y: auto; /* Add vertical scrolling */
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Sidebar />
        <ContentWrapper>
          <Header />
          <MainContent />
        </ContentWrapper>
      </AppContainer>
    </>
  );
};

export default App;
