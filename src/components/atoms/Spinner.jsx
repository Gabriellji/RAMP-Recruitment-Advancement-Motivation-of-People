import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import theme from '../../styles/theme';

const Spinner = () => (
  <Loader
    type="BallTriangle"
    color={theme.colors.purple}
    height={100}
    width={100}
  />
);

export default Spinner;
