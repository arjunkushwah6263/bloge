import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;

  p {
    margin: 0;
    font-size: 1em;
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.8em;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Dynamic Blog. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
