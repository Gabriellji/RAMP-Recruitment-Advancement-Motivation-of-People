import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Context = React.createContext();

const Provider = ({ children }) => {
  // STATE
  const [isLogged, setIsLogged] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [token, setToken] = useState('');

  // FUNCTION
  // scrolltop, for changing page
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  // login handling

  const doLogin = (email, password) => {
    fetch('http://localhost:5000/auth', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (res.status !== 200) {
          setLoginFailed(true);
        } else {
          setIsLogged(true);
          res.json().then((data) => setToken(data.token));
        }
      });
  };

  const inputLogin = () => {
    setLoginFailed(false);
  };

  const logout = () => {
    setIsLogged(false);
  };

  return (

    <Context.Provider
      value={{
        // state
        isLogged,
        loginFailed,
        token,
        // functions
        scrollTop,
        doLogin,
        inputLogin,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
