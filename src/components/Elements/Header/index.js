import React from 'react';
import PropTypes from "prop-types";
import IconHeader from '../../../images/twitter.png';

// Components
import { Button } from 'antd';

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import './Header.scss';

const buttonType = "default";
const buttonShape = "round";

const navContent = [
  {
    text: "Sobre nosotros",
    props: {
      type: buttonType,
      shape: buttonShape
    }
  },
  {
    text: "Contacto",
    props: {
      type: buttonType,
      shape: buttonShape
    }
  },
];

const Header = ({
  logo,
}) => {
  return(
    <header>
      <div className="container">
        <img
          src={logo.url}
          alt={logo.alt}
        />
        <nav>
          {
            navContent.map(item => 
              <div className="nav_button">
                <Button {...item.props}>{item.text}</Button>
              </div>
            )
          }
        </nav>
      </div>
    </header>  
  )
}

Header.propTypes = {
  logo: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  })
};
Header.defaultProps = {
  logo: {
    url: IconHeader,
    alt: ""
  }
};

export default Header;