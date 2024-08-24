import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  text-align: left;
`;

const BlogPost = styled.div`
  margin-bottom: 20px;
`;

const BlogPage = () => (
  <PageContainer>
    <h1>Blog</h1>
    <BlogPost>
      <h2>Blog Post Title 1</h2>
      <p>Summary of the blog post...</p>
      <a href="link_to_full_post">Read more</a>
    </BlogPost>
    <BlogPost>
      <h2>Blog Post Title 2</h2>
      <p>Summary of the blog post...</p>
      <a href="link_to_full_post">Read more</a>
    </BlogPost>
    {/* Add more blog posts as needed */}
  </PageContainer>
);

export default BlogPage;
