import React, { useContext, useState, useEffect } from 'react';
import { Button } from '../components/atoms';
import { Context } from '../context';

export const Home = () => {
  // context
  const { token } = useContext(Context);

  // state
  const [userId, setUserid] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState('');
  const [length, setLength] = useState('1');

  const handleLength = (myStatus) => {
    switch (myStatus) {
    case '':
      setLength('1');
      break;
    case 'TI_TO_ORGANIZE':
      setLength('2');
      break;
    case 'TI_ORGANIZED':
      setLength('2');
      break;
    case 'TI_FINISHED':
      setLength('2');
      break;
    case 'TI_PASSED':
      setLength('2');
      break;
    case 'TT_ASSIGNED':
      setLength('2'); /* here */
      break;
    case 'TT_COMPLETED':
      setLength('2');
      break;
    case 'TT_NOT_PASSED':
      setLength('2');
      break;
    case 'PASSED':
      setLength('3');
      break;
    case 'NOT_PASSED':
      setLength('1');
      break;
    default: setLength(1);
      break;
    }
  };

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
    console.log('....................', typeof status);
    handleLength(status);
  }, [status]);

  return (
    <>
      <p>logo here</p>
      <h1>Hello and welcome to RAMP Recruitmand Advancement Modivational of People</h1>
      {length === '1'
      && (
        <>
          <h3>You have passed the first selection and now is time to move on</h3>
          <p>1.update your profile, i need mmore personal data from you</p>
          <p>Apply for a motivational interview with me from the agenda below</p>
          <p>AGEWNDA</p>
        </>
      )}
      {length === '2'
      && (
        <>
          <h3>You have passed the motivational interview and nime is time to move on</h3>
          <p>inside the challenge section you will find all the instructions</p>
        </>
      )}
      {length === '3'
      && (
        <>
          <h3>Congratulations, accenture wants your talentn</h3>
          <p>Download the contract proposal</p>
          <p>Sign the contract and upload it</p>
          <div>
            <Button
              text="Download contract proposal"
              action={() => console.log('download')}
            />
            <Button
              test="Upload signed contract"
              action={() => console.log('upload')}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
