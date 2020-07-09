import React from 'react';
import './Footer.scss';
import PropTypes from 'prop-types';
import ButtonFloat from '../ButtonFloat'

// icons
import Facebook from '../../images/facebook.png';
import Insta from '../../images/insta.png';
import Twitter from '../../images/twitter.png';

const Icon = [
  {
    url: Facebook,
    text:'facebook'
  },
  {
    url: Insta,
    text:'instagram'
  },
  {
    url: Twitter,
    text:'twitter'
  }
];

const Footer = ({
  icon,
  title,
}) => {
  return (
    <div>
    <ButtonFloat />
      <footer>
        <p>{title}</p>
        <div className="container">
          {
            Icon.map(item => 
              <div>
                <button className='button_icon'>
                  <img 
                    src={item.url}
                    alt={item.text}
                    className='icon'
                  />
                  </button> 
              </div>  
            ) 
          }
        </div>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  title: PropTypes.string,
};
Footer.defaultProps = {
  title: "Terminos y Condiciones "
}

export default Footer;