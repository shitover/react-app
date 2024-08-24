import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Email = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact Information</Title>
      <Email>Email: <a href="mailto:memorant14@gmail.com">{`memorant14@gmail.com`}</a></Email>
    </ContactContainer>
  );
};

export default Contact;