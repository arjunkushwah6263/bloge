import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 2em;
  }

  @media (max-width: 768px) {
    padding: 5px 0;

    h1 {
      font-size: 1.5em;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <h1>Dynamic Blog</h1>
    </Link>
  </HeaderContainer>
);

export default Header;
