import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Spinner = () => (
  <Loader
    type="BallTriangle"
    color="#00008b"
    height={100}
    width={100}
  />
);

export default Spinner;
