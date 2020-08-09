import React from 'react';
import PropTypes from 'prop-types'
//style
import './client-banner.module.scss'

const ClientBanner = ({ src, alt, url }) => {
  return (
    <div className='add_container' onClick={url}>
      <img className='add_img' src={src} alt={alt} />
    </div>
  )
}

ClientBanner.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  url: PropTypes.string,
}

export default ClientBanner;