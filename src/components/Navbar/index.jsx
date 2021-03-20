import React from 'react';

import {
  StyledNavContainer, StyledNavHeader, StyledNav, LinkElem, StyledNavFooter,
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
      <LinkElem to="/tech">CHALLENGE</LinkElem>
      <hr />
    </StyledNav>
    <StyledNavFooter>
      <img src="https://www.infosec.news/wp-content/uploads/2020/09/MarioRossi-1.jpg" alt="my profile" />
      <section>
        <p>Mario Rossi</p>
        <p>Hi, I am your recruiter for this application</p>
        <p>Send me a message by clicking on my picture</p>
      </section>
    </StyledNavFooter>
  </StyledNavContainer>
);

export default Navbar;
