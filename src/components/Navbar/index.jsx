import React from 'react';
import { Link } from 'react-router-dom';

import { NavContainer, StyledNav } from './style';

export const Navbar = () => (
  <NavContainer>
    <p>my picture and stuff here</p>
    <StyledNav>
      <Link to="/">HOME</Link>
      <Link to="/profile">PROFILE</Link>
      <Link to="/my_application">MY APPLICATION</Link>
      <Link to="/tech">TECH TASK</Link>
    </StyledNav>
    <p>other stuff here</p>
  </NavContainer>
);

export default Navbar;
