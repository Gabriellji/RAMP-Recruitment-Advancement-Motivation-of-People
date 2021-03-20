import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../context';

import {
  StyledNavContainer, StyledNavHeader, StyledNav, LinkElem, StyledNavFooter,
} from './style';

export const Navbar = () => {
  // context
  const { token, logout } = useContext(Context);

  // state
  const [pic, setPic] = useState('https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg');
  const [userId, setUserId] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [fullName, setFullName] = useState('');

  // useEffect
  useEffect(async () => {
    if (token) {
      const id = '';
      await fetch('http://localhost:5000/auth', {
        method: 'GET',
        headers: new Headers({
          'x-auth-token': token,
          'Content-Type': 'application/json',
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            res.json().then((data) => {
              // eslint-disable-next-line no-underscore-dangle
              setUserId(data._id);
            });
          }
        });
    }
  }, [token]);

  useEffect(async () => {
    await fetch(`http://localhost:5000/profile/${userId}`, {
      method: 'GET',
      headers: new Headers({
        'x-auth-token': token,
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setPic(data.profile_picture || pic);
            setFullName(`${data.name} ${data.surname}`);
            // console.log('........', data);
          });
        }
      });
    setLoaded(true);
  }, [userId]);

  return (
    <>
      {loaded
        ? (
          <StyledNavContainer>
            <StyledNavHeader>
              <img
                src={
                  pic
                }
                alt="my profile"
              />
              <p>{fullName}</p>
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
            <StyledNavFooter>
              <img src="https://www.infosec.news/wp-content/uploads/2020/09/MarioRossi-1.jpg" alt="my profile" />
              <section>
                <p>Mario Rossi</p>
                <p>Hi, I am your recruiter for this application</p>
                <p>Send me a message by clicking on my picture</p>
              </section>
            </StyledNavFooter>
          </StyledNavContainer>
        )
        : <p>loading</p>}
    </>
  );
};

export default Navbar;
