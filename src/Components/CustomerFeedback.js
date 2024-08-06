import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../images/profile-image.jpeg'
import DianneImage from '../images/dianne.jpeg'
import DevonImage from '../images/Devon.jpeg'


const FeedbackContainer = styled.div`
  background-color: #282a36;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const FeedbackTitle = styled.h2`
  color: white;
`;

const FeedbackList = styled.div`
  max-height: 300px; /* Set the desired height */
  overflow-y: auto;
`;

const FeedbackItem = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #1f1f30;
`;

const FeedbackHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FeedbackCustomer = styled.div`
  display: flex;
  align-items: center;
`;

const FeedbackCustomerImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const FeedbackCustomerName = styled.span`
  font-weight: bold;
  color: white; /* Optional: Change color to white */
`;

const FeedbackRating = styled.div`
  display: flex;
  align-items: center;
`;

const FeedbackStars = styled.span`
  color: #ffd700; /* Gold color for stars */
`;

const GreyStars = styled.span`
  color: #c4c4c4; /* Grey color for stars */
`;

const FeedbackContent = styled.p`
  margin-top: 0.5rem;
  color: #c4c4c4;
`;

const generateStars = (goldStars) => {
  const totalStars = 5;
  const goldStarsArray = Array(goldStars).fill('⭐');
  const greyStarsArray = Array(totalStars - goldStars).fill('⭐');
  return (
    <>
      <FeedbackStars>{goldStarsArray.join('')}</FeedbackStars>
      <GreyStars>{greyStarsArray.join('')}</GreyStars>
    </>
  );
};

const CustomerFeedback = () => {
  return (
    <FeedbackContainer>
      <FeedbackTitle>Customer Feedback</FeedbackTitle>
      <FeedbackList>
        <FeedbackItem>
          <FeedbackHeader>
            <FeedbackCustomer>
              <FeedbackCustomerImage src={ProfileImage} alt="customer" />
              <FeedbackCustomerName>Jenny Wilson</FeedbackCustomerName>
            </FeedbackCustomer>
            <FeedbackRating>{generateStars(4)}</FeedbackRating> {/* 4 gold stars */}
          </FeedbackHeader>
          <FeedbackContent>
            The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.
          </FeedbackContent>
        </FeedbackItem>
        <FeedbackItem>
          <FeedbackHeader>
            <FeedbackCustomer>
              <FeedbackCustomerImage src={DianneImage} alt="customer" />
              <FeedbackCustomerName>Dianne Russell</FeedbackCustomerName>
            </FeedbackCustomer>
            <FeedbackRating>{generateStars(5)}</FeedbackRating> {/* 5 gold stars */}
          </FeedbackHeader>
          <FeedbackContent>
            The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.
          </FeedbackContent>
        </FeedbackItem>
        <FeedbackItem>
          <FeedbackHeader>
            <FeedbackCustomer>
              <FeedbackCustomerImage src={DevonImage} alt="customer" />
              <FeedbackCustomerName>Devon Lane</FeedbackCustomerName>
            </FeedbackCustomer>
            <FeedbackRating>{generateStars(5)}</FeedbackRating> {/* 5 gold stars */}
          </FeedbackHeader>
          <FeedbackContent>
            The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.
          </FeedbackContent>
        </FeedbackItem>
      </FeedbackList>
    </FeedbackContainer>
  );
};

export default CustomerFeedback;
