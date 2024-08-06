import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #282a36;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
//   border-bottom: 1px solid #44475a;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemLeft = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
  margin-right: 1rem;
  color: white;
  font-size: 1.5rem;
`;

const Title = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const ArrowIcon = styled.span`
  color: gray;
`;

const GoalsPopularDishesMenus = () => {
  return (
    <Container>
      <ItemContainer>
        <ItemLeft>
          <Icon bgColor="#e67e22">
            <span className="material-icons">target</span>
          </Icon>
          <Title>Goals</Title>
        </ItemLeft>
        <ArrowIcon className="material-icons">arrow_forward_ios</ArrowIcon>
      </ItemContainer>
      <ItemContainer>
        <ItemLeft>
          <Icon bgColor="#3498db">
            <span className="material-icons">fastfood</span>
          </Icon>
          <Title>Popular Dishes</Title>
        </ItemLeft>
        <ArrowIcon className="material-icons">arrow_forward_ios</ArrowIcon>
      </ItemContainer>
      <ItemContainer>
        <ItemLeft>
          <Icon bgColor="#1abc9c">
            <span className="material-icons">restaurant_menu</span>
          </Icon>
          <Title>Menus</Title>
        </ItemLeft>
        <ArrowIcon className="material-icons">arrow_forward_ios</ArrowIcon>
      </ItemContainer>
    </Container>
  );
};

export default GoalsPopularDishesMenus;
