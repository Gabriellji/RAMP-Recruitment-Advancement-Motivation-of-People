import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../context';
import { Text, Spinner } from '../components/atoms';

import {
  ApplicationWrapper,
  SecondApplicationWrapper,
  Dot,
  SpinnerWrapper,
} from './style';

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

export const Application = () => {
  // context
  const { token } = useContext(Context);

  // state
  const [status, setStatus] = useState('');
  const [userId, setUserId] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [length, setLength] = useState(1);
  const [dataToDisplay, setDataToDisplay] = useState(initialData);

  // func
  const handleLength = (sta) => {
    // console.log('........', length);
    const test = '';
    // console.log('....status', sta);
    // console.log('........status', sta);
    switch (sta) {
    case '':
      setLength(1);
      break;
    case 'TI_TO_ORGANIZE':
      setLength(2);
      break;
    case 'TI_ORGANIZED':
      setLength(3);
      break;
    case 'TI_FINISHED':
      setLength(3);
      break;
    case 'TI_PASSED':
      setLength(4);
      break;
    case 'TT_ASSIGNED':
      setLength(5); /* here */
      break;
    case 'TT_COMPLETED':
      setLength(5);
      break;
    case 'TT_NOT_PASSED':
      setLength(5);
      break;
    case 'PASSED':
      setLength(1);
      break;
    case 'NOT_PASSED':
      setLength(1);
      break;
    default:
      setLength(1);
      break;
    }
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
      }).then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            // eslint-disable-next-line no-underscore-dangle
            setUserId(data._id);
          });
        }
      });
    }
  }, [token]);

  useEffect(() => {
    console.log('.......length', length);
  }, [length]);

  useEffect(async () => {
    await fetch(`http://localhost:5000/status/${userId}`, {
      method: 'GET',
      headers: new Headers({
        'x-auth-token': token,
        'Content-Type': 'application/json',
      }),
    }).then((res) => {
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
  }, [status]);
  return (
    <ApplicationWrapper>
      {loaded ? (
        <>
          {dataToDisplay.map((toPass, index) => (
            <SecondApplicationWrapper selected={index < length}>
              <Dot />
              <Text text={toPass} />
            </SecondApplicationWrapper>
          ))}
        </>
      ) : (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
    </ApplicationWrapper>
  );
};

export default Application;
