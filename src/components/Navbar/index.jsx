import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledNavContainer, StyledNavHeader, StyledNav, LinkElem,
} from './style';

export const Navbar = () => (
  <StyledNavContainer>
    <StyledNavHeader>
      <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" alt="my profile" />
      <p>Jane Doe</p>
    </StyledNavHeader>
    <StyledNav>
      <hr />
      <LinkElem to="/home">HOME</LinkElem>
      <hr />
      <LinkElem to="/profile">PROFILE</LinkElem>
      <hr />
      <LinkElem to="/my_application">MY APPLICATION</LinkElem>
      <hr />
      <LinkElem to="/tech">TECH TASK</LinkElem>
      <hr />
    </StyledNav>
    <p>other stuff here</p>
  </StyledNavContainer>
);

export default Navbar;
