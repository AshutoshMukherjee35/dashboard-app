import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from '../src/Components/Sidebar';
import MainContent from '../src/Components/MainContent';
import Header from '../src/Components/Header';

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
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #212437;
  overflow: hidden; 
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
