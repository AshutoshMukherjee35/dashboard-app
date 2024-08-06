import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 4rem;
  height: 100vh;
  background-color: #1a1a2e;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 2rem;
  box-sizing: border-box;
`;

const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #0f3460;
    border-radius: 50%;
    padding: 0.5rem;
  }
`;

const SidebarIcon = styled.span`
  font-size: 2rem;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem>
        <SidebarIcon className="material-icons">dashboard</SidebarIcon>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon className="material-icons">settings</SidebarIcon>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon className="material-icons">exit_to_app</SidebarIcon>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
