import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../context';
import {
  Title, Input, Button, Text,
} from '../components/atoms';
import { ProfileForm, LabelWrapper } from './style';

export const Home = () => {
  // context
  const { token, logout } = useContext(Context);
  // state
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setData] = useState(null);
  const [nationality, setNationality] = useState('');
  const [cv, setCv] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [website, setWebsite] = useState('');
  // functions
  // useEffect
  useEffect(() => {
    console.log('..', token);
    fetch('http://localhost:5000/auth', {
      method: 'GET',
      headers: new Headers({
        'x-auth-token': token,
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => {
        if (res.status !== 200) {
          logout();
        } else {
          res.json().then((data) => setEmail(data.email));
        }
      });
  }, []);

  return (
    <>
      <Title
        text="My Profile"
      />
    </>
  );
};

export default Home;
