import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const BlogPost = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text};
`;

const BlogLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const Blog = () => {
  const mediumLinks = [
    { title: 'My First Medium Post', url: 'https://medium.com/@yourusername/your-first-post' },
    { title: 'Another Interesting Article', url: 'https://medium.com/@yourusername/another-article' },
    // Add more Medium links as needed
  ];

  return (
    <BlogContainer>
      <Title>My Medium Writings</Title>
      {mediumLinks.map((post, index) => (
        <BlogPost key={index}>
          <BlogLink href={post.url} target="_blank" rel="noopener noreferrer">
            {post.title}
          </BlogLink>
        </BlogPost>
      ))}
    </BlogContainer>
  );
};

export default Blog;