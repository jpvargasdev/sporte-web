import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import "antd/dist/antd.css";
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';


//style
import './storyCard.scss'

//Components


const FollowingWhite = () => {
  return(
    <Button type="link" shape="circle">
      <p className='text'>LEER MÁS</p>
      <IosArrowForward onClick={() => alert('Hi!')} className='logo' fontSize="15px" color="#fff" />
  </Button>
  )
}

const StoryCard = ({
  bannerImage,
  title,
  linkHandler
  
}) => {
  return(
      <div className="cardh__image" onClick={linkHandler}>
        <img className='image' src={bannerImage.file.url} alt={bannerImage.title} />
        <div className='card__title' >
          <h3>{title}</h3>
          <FollowingWhite />
        </div>
      </div>
  )
}

StoryCard.propTypes = {
  title: PropTypes.string,
  bannerImage: PropTypes.shape({
    title: PropTypes.string,
    file: PropTypes.shape({
    url: PropTypes.string,
    }),
  }),
  linkHandler: PropTypes.func,
}

StoryCard.defaultProps= {
  title: "test",
  bannerImage: {
    title: "test",
    file: {
      url: "testel c",
    },
  },
}

export default StoryCard; 