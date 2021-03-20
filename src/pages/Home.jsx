import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context';

export const Home = () => {
  // context
  const { token } = useContext(Context);

  // state
  const [userId, setUserid] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState('');

  // useeffect
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
              setUserid(data._id);
            });
          }
        });
    }
  }, [token]);

  useEffect(async () => {
    await fetch(`http://localhost:5000/status/${userId}`, {
      method: 'GET',
      headers: new Headers({
        'x-auth-token': token,
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setStatus(data.status);
          });
        }
      });
    setLoaded(true);
  }, [userId]);

  useEffect(() => {
    console.log('....................', status);
    // func that change switch here
  }, [status]);

  return (
    <h1>hi</h1>
  );
};

export default Home;
