import React from 'react';

//components
import Following from "../../../Base/Following";
import Share from '../../../Base/Share';

//style
import './carousel-card.module.scss';

const CarrouselCard = ({ linkHandler, title, bannerImage }) => {
  const { fields } = bannerImage
  return(
    <div className="content_carousel">
      <div className="cardw__image" onClick={linkHandler}>
        <img className='image' src={fields.file.url} alt={fields.title} />
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