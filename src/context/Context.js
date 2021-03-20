import React, { useState } from "react";

export const Context = React.createContext();

const Provider = ({ children }) => {
  //state

  //function

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (

    <Context.Provider
      value={{
        //state

        //functions
        scrollTop
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
