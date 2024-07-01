import React, { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';
import { fetchBlogPosts } from '../api';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  .container {
    padding: 20px;
  }
`;

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchBlogPosts();
        setPosts(data);
      } catch (error) {
        setError('Failed to fetch blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <HomePageContainer>
      <div className="container">
        <BlogList posts={posts} />
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
