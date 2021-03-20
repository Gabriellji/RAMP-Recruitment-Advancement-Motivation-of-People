import React, { useState } from "react";

export const Context = React.createContext();

const Provider = ({ children }) => {
  //state
  const [isLogged, setIsLogged] = useState(false)

  //function

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const doLogin = (username, password) => {
    //apicallhere
    username==="test" && password==="test" 
    && setIsLogged(true)
  }

  return (

    <Context.Provider
      value={{
        //state
        isLogged,

        //functions
        scrollTop,
        doLogin,
        
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
