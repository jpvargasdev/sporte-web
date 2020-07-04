import React from 'react';
import IconHeader from '../../images/twitter.png';

import './Header.scss';

const Header = () => {
  return(
    <header>
      <img
        src={IconHeader}
        alt='hello'
      />
      <h1 className="title">Texto daniela es boba</h1>   
    </header>  
  )
}

export default Header;