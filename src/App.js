import React, { useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { FaHome, FaBook, FaProjectDiagram, FaEnvelope, FaBlog } from 'react-icons/fa';
import GlobalStyle from './GlobalStyle';
import { lightTheme, darkTheme } from './themes';
import Header from './components/Header';
import About from './components/About';
import Books from './components/Books'; // Import Books component
import Projects from './components/Projects';
import Contact from './components/Contact'; // Import Contact component
import Blog from './components/Blog'; // Import Blog component

const AppContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the content */
  padding: 20px;
`;

const MainContent = styled.div`
  flex: 3;
  margin-right: 0; /* Remove right margin */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content */
`;

const Sidebar = styled.div`
  flex: 1;
  padding-left: 10px; /* Adjust left padding */
  border-left: 1px solid ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start */
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 18px;

  & > svg {
    margin-right: 8px; /* Space between icon and text */
  }
`;

const ProfileImage = styled.img`
  display: block;
  margin: 0 auto 10px; /* Center the image and add bottom margin */
  width: 250px; /* Increase the size of the image */
  height: 250px; /* Ensure the image is square */
  border-radius: 50%; /* Make the image circular */
  margin-top: -50px; /* Move the image upwards */
`;

const App = () => {
  const [theme, setTheme] = React.useState('dark');
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Change the document title
  useEffect(() => {
    document.title = "My Portfolio";
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} theme={theme} />
      <AppContainer>
        <MainContent>
          {location.pathname === '/' && <ProfileImage src="/profile.jpg" alt="Profile" />}
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/books" element={<Books />} /> {/* Use Books component */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> {/* Use Contact component */}
            <Route path="/blog" element={<Blog />} /> {/* Use Blog component */}
          </Routes>
        </MainContent>
        <Sidebar>
          <SidebarLink to="/">
            <FaHome /> Home
          </SidebarLink>
          <SidebarLink to="/books">
            <FaBook /> Books
          </SidebarLink>
          <SidebarLink to="/projects">
            <FaProjectDiagram /> Projects
          </SidebarLink>
          <SidebarLink to="/contact">
            <FaEnvelope /> Contact
          </SidebarLink>
          <SidebarLink to="/blog">
            <FaBlog /> Blog
          </SidebarLink>
        </Sidebar>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;