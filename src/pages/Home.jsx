import React, { useContext, useState, useEffect } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { Button, Text, Title } from '../components/atoms';
import { Context } from '../context';
import {
  DateWrapper, HomeHeader, HomeMain, TextSection, LastP, ButtonSection,
} from './style';

// images
import logo from '../Images/ramplogo.jpg';

export const Home = () => {
  // context
  const { token } = useContext(Context);

  // state
  const [userId, setUserid] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState('');
  const [length, setLength] = useState('1');
  const [date, setDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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
    default: setLength('1');
      break;
    }
  };

  const selectDate = (e) => {
    console.log(e);
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
    handleLength(status);
  }, [status]);

  return (
    <>
      {loaded
        ? (
          <HomeMain>
            <HomeHeader>
              <img src={logo} alt="RAMP Logo" />
              <img src="https://loghi-famosi.com/wp-content/uploads/2020/06/Accenture-Logo-650x366.png" alt="RAMP Logo" />
            </HomeHeader>
            <h1>Recruitment Advancement Motivation of People</h1>
            {length === '1'
  && (
    <>
      <TextSection>
        <Title
          text="You have passed the first selection and now is time to move on!"
        />
        <Text
          text="1) Update your profile in the 'PROFILE' section of the sidebar, I need more personal data from you"
        />
        <Text
          text="2) Apply for a motivational interview with me from the agenda below"
        />
      </TextSection>
      <Button
        text="Agenda"
        action={() => setIsOpen(!isOpen)}
      />
      <DateWrapper>
        <DateRangePicker
          format="dd/MM/yyyy"
          onChange={(e) => setDate(e)}
          value={date}
          isOpen={isOpen}
        />
      </DateWrapper>
    </>
  )}
            {length === '2'
  && (
    <TextSection>
      <Title
        text="You have passed the motivational interview, good job!"
      />
      <Text
        text="Inside the 'CHALLENGE' section of the sidebar you will find all the instructions for the next step!"
      />
    </TextSection>
  )}
            {length === '3'
  && (
    <>
      <TextSection>
        <Title
          text="Congratulations, you made it! Welcome to Accenture!"
        />
        <Text
          text="Download contract proposal"
        />
        <Text
          text="Upload signed contract"
        />
      </TextSection>
      <ButtonSection>
        <Button
          text="Download contract proposal"
          action={() => console.log('download')}
        />
        <Button
          text="Upload signed contract"
          action={() => console.log('upload')}
        />
      </ButtonSection>
    </>
  )}
            <LastP>Thank you, Mario Rossi</LastP>
          </HomeMain>
        )
        : <p>loaded</p>}
    </>
  );
};

export default Home;
