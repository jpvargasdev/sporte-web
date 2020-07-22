import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import "antd/dist/antd.css";
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
import Following from '../../../Base/Following'


//style
import './CardHeight.scss'

//Components



const CardHeight = ({
  bannerImage,
  title,
  linkHandler
  
}) => {
  return(
      <div className="cardh__image" onClick={linkHandler}>
        <img className='image' src={bannerImage.file.url} alt={bannerImage.title} />
        <div className='card__title' >
          <h3>{title}</h3>
          <Following props='white' />
        </div>
      </div>
  )
}

CardHeight.propTypes = {
  title: PropTypes.string,
  bannerImage: PropTypes.shape({
    title: PropTypes.string,
    file: PropTypes.shape({
    url: PropTypes.string,
    }),
  }),
  linkHandler: PropTypes.func,
}

CardHeight.defaultProps= {
  title: "test",
  bannerImage: {
    title: "test",
    file: {
      url: "testel c",
    },
  },
}

export default CardHeight; 