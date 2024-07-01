import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import { fetchBlogPostById } from '../api';
import styled from 'styled-components';

const BlogPageContainer = styled.div`
  .container {
    padding: 20px;
  }
`;

const BlogPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await fetchBlogPostById(id);
        setPost(data);
      } catch (error) {
        setError('Failed to fetch blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <BlogPageContainer>
      <div className="container">
        <BlogPost post={post} />
      </div>
    </BlogPageContainer>
  );
};

export default BlogPage;
