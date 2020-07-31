import React from 'react';

//components
import Following from "../../../Base/Following";
import Share from '../../../Base/Share';

//style
import './carrouselCard.scss'

const CarrouselCard = ({ img, title, linkHandler }) => {
  return(
    <div className="content_carousel">
      <div className="cardw__image" onClick={linkHandler}>
        <img className='image' src={img.file.url} alt={img.title} />
        <div className='card__title' >
          <h3>{title}</h3>
          <Following props='white'/>
          <Share color='black'/>
        </div>
      </div>
  </div>
  )
}

export default CarrouselCard;