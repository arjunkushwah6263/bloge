import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 20px 0;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const BlogList = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <BlogItem key={post.id}>
        <h2>{post.title}</h2>
        <img src={post.image} alt={post.title} />
        <p>by {post.author}</p>
        <p>{post.snippet}</p>
        <Link to={`/blog/${post.id}`}>Read More</Link>
      </BlogItem>
    ))}
  </div>
);

export default BlogList;
