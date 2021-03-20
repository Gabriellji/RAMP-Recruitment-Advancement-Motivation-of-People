import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../context';
import {
  Title, Input, Button, Text,
} from '../components/atoms';
import { ProfileForm, LabelWrapper } from './style';

export const Profile = () => {
  // context
  const { token, logout } = useContext(Context);
  // const
  const initialState = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    date: '',
    country: '',
    cv: '',
    linkedin: '',
    github: '',
    website: '',
  };
  const info = [
    { name: 'First name', key: 'name' },
    { name: 'Second name', key: 'surname' },
    { name: 'Email', key: 'email' },
    { name: 'Phone Number', key: 'phone' },
    { name: 'Date of birth', key: 'date' },
    { name: 'Nationality', key: 'country' },
    { name: 'Resume link', key: 'cv' },
    { name: 'Linkedin', key: 'linkedin' },
    { name: 'Github', key: 'github' },
    { name: 'Personal website', key: 'website' },
  ];
  // state
  const [user, setUser] = useState(initialState);
  // functions
  const handleOnChange = (e) => {
    const newUser = user;
    newUser[e.target.id] = e.target.value;
    setUser(newUser);
    console.log('...', newUser);
  };
  // useEffect
  useEffect(() => {
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
          res.json().then((data) => setUser({ ...user, email: data.email }));
        }
      });
  }, []);

  return (
    <>
      <Title
        text="My Profile"
      />
      <ProfileForm onChange={(e) => handleOnChange(e)}>
        {info.map((option) => (
          <LabelWrapper>
            <Text
              text={option.name}
            />
            <Input
              placeholder={option.name}
              value={user[option.key]}
              id={option.key}
            />
          </LabelWrapper>
        ))}
        <Button
          text="Edit profile"
        />
      </ProfileForm>
    </>
  );
};

export default Profile;
