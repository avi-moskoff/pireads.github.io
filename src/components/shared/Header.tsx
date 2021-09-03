import * as React from 'react'

import FancyLink from "./FancyLink";

const Header = () => {
  return (
    <div className='header'>
      <h1 className='name'>AVI MOSKOFF</h1>
      <FancyLink to="/" className='headerLink' text="home" />
      <FancyLink to="/resume" className='headerLink' text="resume" />
      <FancyLink to="/" className='headerLink' text="transcript" />
    </div>
  );
};

export default Header;
