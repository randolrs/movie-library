import React from 'react';
import styled from 'styled-components';
import DIMENSIONS from './dimensions';

const Nav = () => {
  return (
    <NavContainer>
      <HomeLink href='/'>Movie Library</HomeLink>
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.div`
  background: #fff;
  box-shadow: 0px 2px 3px rgba(0,0,0,0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: ${ DIMENSIONS.nav_height }px;
`;

const HomeLink = styled.a`
  text-decoration: none;
  display: inline-block;
  line-height: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #323;
  padding: ${ (DIMENSIONS.nav_height - 20) / 2 }px;
`;
