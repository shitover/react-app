import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end; /* Align items to the right */
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.background};
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const Header = ({ toggleTheme, theme }) => {
  return (
    <HeaderContainer>
      <ThemeToggle onClick={toggleTheme}>
        {theme === 'dark' ? '🌙' : '☀️'}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;