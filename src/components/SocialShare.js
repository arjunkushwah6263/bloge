import React from 'react';
import styled from 'styled-components';

const ShareContainer = styled.div`
  margin-top: 20px;

  a {
    margin-right: 10px;
    color: #0073b1;
  }

  @media (max-width: 768px) {
    margin-top: 10px;

    a {
      margin-right: 5px;
    }
  }
`;

const SocialShare = ({ url }) => {
  const shareUrl = encodeURIComponent(url);
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${shareUrl}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;

  return (
    <ShareContainer>
      <a href={facebookShare} target="_blank" rel="noopener noreferrer">Share on Facebook</a>
      <a href={twitterShare} target="_blank" rel="noopener noreferrer">Share on Twitter</a>
      <a href={linkedinShare} target="_blank" rel="noopener noreferrer">Share on LinkedIn</a>
    </ShareContainer>
  );
};

export default SocialShare;
