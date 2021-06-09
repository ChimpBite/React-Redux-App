import React from 'react';

import { ReactComponent as Logo } from '../../assets/startup.svg';

import './header.scss';

const header = () => {
  return (
    <div className='header'>
      <Logo className='logo-container' />
      <h1>Space News</h1>
    </div>
  );
};

export default header;
