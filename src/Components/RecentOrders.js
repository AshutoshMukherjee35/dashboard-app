import React from 'react';
import styled from 'styled-components';
import WadeImage from '../images/profile-image.jpeg'
import JennyImage from '../images/dianne.jpeg'
import AlbertImage from '../images/Albert.jpeg'
import KristineImage from '../images/kristine.jpeg'
import GuyImage from '../images/Devon.jpeg'
import CodyImage from '../images/cody.jpeg'

const OrdersContainer = styled.div`
  background-color: #282a36;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledH2 = styled.h2`
    padding: 2 rem;
    margin-bottom: 1rem;
`;

const OrderItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1fr;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #1f1f30;
`;

const OrderCustomer = styled.div`
  display: flex;
  align-items: center;
`;

const OrderCustomerDetails = styled.div`
  margin-left: 0.5rem;
`;

const OrderCustomerImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const OrderField = styled.span`
  margin: 0 0.5rem; /* Reduced margin for closer spacing */
`;

const OrderStatus = styled.span`
  color: ${props => {
    switch (props.status) {
      case 'delivered':
        return '#4caf50'; // green
      case 'cancelled':
        return '#f44336'; // red
      case 'pending':
        return '#ff9800'; // orange
      default:
        return '#ffffff'; // white
    }
  }};
`;

const RecentOrders = () => {
  return (
    <OrdersContainer>
      <StyledH2>Recent Orders</StyledH2>
      <OrderItem>
        <OrderCustomer>
          <OrderCustomerImage src={WadeImage} alt="customer1" />
          <OrderCustomerDetails>
            <span>Wade Warren</span>
          </OrderCustomerDetails>
        </OrderCustomer>
        <OrderField>#1001</OrderField>
        <OrderField>$124.00</OrderField>
        <OrderStatus status="delivered">Delivered</OrderStatus>
      </OrderItem>
      <OrderItem>
        <OrderCustomer>
          <OrderCustomerImage src={JennyImage} alt="customer2" />
          <OrderCustomerDetails>
            <span>Jenny Wilson</span>
          </OrderCustomerDetails>
        </OrderCustomer>
        <OrderField>#1002</OrderField>
        <OrderField>$250.50</OrderField>
        <OrderStatus status="pending">Pending</OrderStatus>
      </OrderItem>
      <OrderItem>
        <OrderCustomer>
          <OrderCustomerImage src={AlbertImage} alt="customer3" />
          <OrderCustomerDetails>
            <span>Albert Flores</span>
          </OrderCustomerDetails>
        </OrderCustomer>
        <OrderField>#1003</OrderField>
        <OrderField>$575.00</OrderField>
        <OrderStatus status="cancelled">Cancelled</OrderStatus>
      </OrderItem>
      <OrderItem>
        <OrderCustomer>
          <OrderCustomerImage src={KristineImage} alt="customer3" />
          <OrderCustomerDetails>
            <span>Kristine Watson</span>
          </OrderCustomerDetails>
        </OrderCustomer>
        <OrderField>#1003</OrderField>
        <OrderField>$753.00</OrderField>
        <OrderStatus status="delivered">Delivered</OrderStatus>
      </OrderItem>
      <OrderItem>
        <OrderCustomer>
          <OrderCustomerImage src={GuyImage} alt="customer3" />
          <OrderCustomerDetails>
            <span>Guy Hawkins</span>
          </OrderCustomerDetails>
        </OrderCustomer>
        <OrderField>#1003</OrderField>
        <OrderField>$715.00</OrderField>
        <OrderStatus status="cancelled">Cancelled</OrderStatus>
      </OrderItem>
      <OrderItem>
        <OrderCustomer>
          <OrderCustomerImage src={CodyImage} alt="customer3" />
          <OrderCustomerDetails>
            <span>Cody Fischer</span>
          </OrderCustomerDetails>
        </OrderCustomer>
        <OrderField>#1003</OrderField>
        <OrderField>$275.00</OrderField>
        <OrderStatus status="delivered">Delivered</OrderStatus>
      </OrderItem>
    </OrdersContainer>
  );
};

export default RecentOrders;
