import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #1a1a2e;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #212437;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  color: white;
  margin-left: 0.5rem;
  outline: none;
  &::placeholder {
    color: gray;
  }
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212437;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
`;

const DashboardHeading = styled.h1`
  padding: 1rem;
  background-color: #1a1a2e;
  color: white;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <SearchBar>
          <span className="material-icons">search</span>
          <SearchInput type="text" placeholder="Search" />
        </SearchBar>
        <IconGroup>
          <Icon>
            <span className="material-icons">mail</span>
          </Icon>
          <Icon>
            <span className="material-icons">settings</span>
          </Icon>
          <Icon>
            <span className="material-icons">notifications</span>
          </Icon>
          <Icon>
            <span className="material-icons">person</span>
          </Icon>
        </IconGroup>
      </HeaderContainer>
      <DashboardHeading>Dashboard</DashboardHeading>
    </>
  );
};

export default Header;
