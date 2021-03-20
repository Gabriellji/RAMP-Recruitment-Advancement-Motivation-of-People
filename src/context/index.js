import React, { useState } from "react";

export const Context = React.createContext();

const Provider = ({ children }) => {
  //STATE
  const [isLogged, setIsLogged] = useState(false)
  const [loginFailed, setLoginFailed] = useState(false)

  //FUNCTION
  //scrolltop, for changing page
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  //login handling
  const doLogin = (username, password) => {
    //apicallhere
    username==="test" && password==="test" 
    ? setIsLogged(true)     //status200
    : setLoginFailed(true)    //status400
  }
  const inputLogin = () => {
    setLoginFailed(false)
  }

  return (

    <Context.Provider
      value={{
        //state
        isLogged,
        loginFailed,
        //functions
        scrollTop,
        doLogin,
        inputLogin
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
