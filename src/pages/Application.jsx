import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../context';
import { Text } from '../components/atoms';

import { ApplicationWrapper, SecondApplicationWrapper, Dot } from './style';

export const Application = () => {
  // context
  const { token } = useContext(Context);

  // initial data
  const initialData = [
    'Pass first selection',
    'Tech interview to organize',
    'Tech interview organized',
    'Tech interview passed',
    'tech task assigned',
    'Tech task started',
    'Tech task completed',
    'Tech task passed',
    'You need to sign a contract now',
  ];

  // state
  const [status, setStatus] = useState('');
  const [userId, setUserId] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [length, setLength] = useState(1);
  const [dataToDisplay, setDataToDisplay] = useState(initialData);

  // func
  const handleLength = (sta) => {
    console.log('....status', sta);
    setLength(2);
  };
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
    handleLength(status);
    setDataToDisplay(dataToDisplay.length > 0 && dataToDisplay.splice(0, length));
  }, [status]);
  return (
    <ApplicationWrapper>
      { loaded
        ? (
          <>
            {dataToDisplay.map((topass) => (
              <SecondApplicationWrapper>
                <Dot />
                <Text
                  text={topass}
                />
              </SecondApplicationWrapper>
            ))}
          </>
        )
        : <p>spinner</p>}
    </ApplicationWrapper>
  );
};

export default Application;
