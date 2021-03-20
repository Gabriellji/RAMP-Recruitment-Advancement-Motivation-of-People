import React, { useState, useContext } from 'react';
import { Context } from '../context';

import {
  Title, Text, Input, Button,
} from '../components/atoms';

import { StyledLogin } from './style';

export const Login = () => {
  // context
  const { doLogin, loginFailed, inputLogin } = useContext(Context);
  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // functions
  const changeEmail = (mail) => {
    inputLogin();
    setEmail(mail);
  };
  const changePassword = (pass) => {
    inputLogin();
    setPassword(pass);
  };

  const submit = (e, mail, pass) => {
    e.preventDefault();
    doLogin(mail, pass);
  };
  return (
    <StyledLogin
      onSubmit={(e) => submit(e, email, password)}
    >
      <Title
        text="Welcome to RAMP"
      />
      {loginFailed && (
        <Text
          text="Wrong email and/or password, please try again"
        />
      )}
      <Input
        placeholder="email"
        onChange={(value) => changeEmail(value)}
      />
      <Input
        placeholder="password"
        onChange={(value) => changePassword(value)}
        type="password"
      />
      <Button
        text="Login"
        action={(e) => submit(e, email, password)}
      />
    </StyledLogin>
  );
};

export default Login;
