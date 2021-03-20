import React, { useState, useContext, useEffect } from 'react';
import moment from 'moment';
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
    phone: '',
    date_of_birth: '',
    country: '',
    cv: '',
    linkedin: '',
    github: '',
    website: '',
  };

  const info = [
    { name: 'First name', key: 'name' },
    { name: 'Second name', key: 'surname' },
    { name: 'Phone Number', key: 'phone' },
    { name: 'Date of birth', key: 'date_of_birth' },
    { name: 'Nationality', key: 'country' },
    { name: 'Resume link', key: 'cv' },
    { name: 'Linkedin', key: 'linkedin' },
    { name: 'Github', key: 'github' },
    { name: 'Personal website', key: 'website' },
  ];

  // state

  const [user, setUser] = useState(initialState);
  const [loaded, setLoaded] = useState(false);
  const [change, setChange] = useState(false);
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);

  // functions

  const handleOnChange = (e) => {
    setError(false);
    const newUser = user;
    newUser[e.target.id] = e.target.value;
    setUser(newUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/profile', {
      method: 'POST',
      headers: new Headers({
        'x-auth-token': token,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ ...user, email, username }),
    })
      .then((res) => {
        if (res.status !== 201) {
          // logout();
          setError(true);
        } else {
          setChange(false);
        }
      });
    // setChange(false);
  };

  // useEffect

  useEffect(async () => {
    if (logout && token) {
      const id = '';
      await fetch('http://localhost:5000/auth', {
        method: 'GET',
        headers: new Headers({
          'x-auth-token': token,
          'Content-Type': 'application/json',
        }),
      })
        .then((res) => {
          if (res.status !== 200) {
            // logout();
          } else {
            res.json().then((data) => {
              // eslint-disable-next-line no-underscore-dangle
              setUserId(data._id);
              setEmail(data.email);
            });
          }
        });
    }
  }, [logout, token]);

  useEffect(async () => {
    await fetch(`http://localhost:5000/profile/${userId}`, {
      method: 'GET',
      headers: new Headers({
        'x-auth-token': token,
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => {
        if (res.status !== 200) {
          // logout();
        } else {
          res.json().then((data) => {
            setUsername(data.username);
            setUser({
              ...user,
              country: data.country,
              cv: data.cv,
              date_of_birth: moment(data.date_of_birth).format('YYYY/MM/DD'),
              github: data.github,
              linkedin: data.linkedin,
              name: data.name,
              phone: data.phone,
              surname: data.surname,
              website: data.website,
            });
          });
        }
      });
    setLoaded(true);
  }, [userId]);

  return (
    <>
      {loaded
        ? (
          <>
            {' '}
            <Title
              text="My Profile"
            />
            <ProfileForm
              onChange={(e) => handleOnChange(e)}
              onSubmit={(e) => handleSubmit(e)}
            >
              {info.map((option) => (
                <LabelWrapper>
                  <Text
                    text={option.name}
                  />
                  {change
                    ? (
                      <Input
                        placeholder={option.name}
                        initialValue={user[option.key]}
                        id={option.key}
                      />
                    )
                    : (
                      <Text
                        text={user[option.key]}
                      />
                    )}
                </LabelWrapper>
              ))}
            </ProfileForm>
            {error && (
              <Text
                text="try again"
              />
            )}
            {change
              ? (
                <Button
                  text="Save"
                  action={(e) => handleSubmit(e)}
                />
              )
              : (
                <Button
                  text="Edit profile"
                  action={() => setChange(true)}
                />
              )}
          </>
        )
        : <p>spinner</p>}
    </>
  );
};

export default Profile;