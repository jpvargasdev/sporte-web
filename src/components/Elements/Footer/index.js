import React from 'react';
import './Footer.scss';
import PropTypes from 'prop-types';
import ButtonFloat from '../../Base/ButtonFloat';

// icons
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';

const Icon = [
  {
    Logo: LogoFacebook,
    text:'facebook'
  },
  {
    Logo: LogoInstagram,
    text:'instagram'
  },
];

const Footer = ({
  title,
}) => {
  return (
    <div>
    <ButtonFloat />
      <footer>
        <p>{title}</p>
        <div className="container">
          {
            Icon.map(item => {
              const { Logo } = item;
              return <Logo key={item.text} fontSize="30px" color="grey" />
            }) 
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