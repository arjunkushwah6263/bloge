import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SocialShare from './SocialShare';

const PostContainer = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

const LinkedInLink = styled.a`
  display: block;
  margin-top: 20px;
  color: #0073b1;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const BlogPost = ({ post }) => (
  <PostContainer>
    <h1>{post.title}</h1>
    <PostImage src={post.image} alt={post.title} />
    <h3>by {post.author}</h3>
    <ReactMarkdown
      children={post.content}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter style={darcula} language={match[1]} PreTag="div" {...props}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
    <LinkedInLink href={post.linkedin} target="_blank" rel="noopener noreferrer">
      {post.author}'s LinkedIn
    </LinkedInLink>
    <SocialShare url={window.location.href} />
  </PostContainer>
);

export default BlogPost;
