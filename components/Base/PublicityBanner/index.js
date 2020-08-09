import React from 'react';
import PropTypes from 'prop-types';

import './publicity-banner.module.scss';

export const BANNER_SIZE = {
  RECTANGLE: 'rectangle',
  PORTRAIT: 'portrait',
};

const PublicityBanner = ({
  className = '',
  type,
}) => (
  <div className={`publicity_banner ${className} publicity_banner-${type}`}>
    <h5> Publicity Banner </h5>
  </div>
);

PublicityBanner.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf['', ''],
};

PublicityBanner.defaultProps = {
  type: BANNER_SIZE.RECTANGLE,
};

export default PublicityBanner;
