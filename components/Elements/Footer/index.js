import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import './footer.module.scss';

// icons
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';

// constants
const { Footer } = Layout;

const Icon = [
  {
    Logo: LogoFacebook,
    text: 'facebook',
    url: 'https://www.facebook.com/Sporte-107619361052314/',
  },
  {
    Logo: LogoInstagram,
    text: 'instagram',
    url: 'https://www.instagram.com/sporteoficial/',
  },
];

const footerStyle = {
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  display: 'flex',
};

const mFooter = ({
  title,
  footerFixed,
}) => {
  const classes = footerFixed ? 'fixed' : '';
  return (
    <Footer className={`footer footer-${classes}`} style={footerStyle}>
      <p>{title}</p>
      <div>
        {
          Icon.map((item) => {
            const { Logo } = item;
            return (
              <a key={item.text} href={item.url}>
                <Logo key={item.text} className="icon" fontSize="25px" color="white" />
              </a>
            );
          })
        }
      </div>
    </Footer>
  );
};

mFooter.propTypes = {
  title: PropTypes.string,
};
mFooter.defaultProps = {
  title: 'Copyright. © 2020. Sporte. Todos Los Derechos Reservados.',
};

export default mFooter;
