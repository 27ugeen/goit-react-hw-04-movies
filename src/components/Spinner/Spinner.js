import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () => (
  <div className="Spinner">
    <Loader type="ThreeDots" color="#d87093" height={50} width={50} />
  </div>
);

export default Spinner;
