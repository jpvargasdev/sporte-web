import React from 'react';

//style
import './card-client.module.scss'

//component
import Share from '../../../Base/Share'

const CardClient = ({img, title, linkHandler}) => {
  return(
    <div className="Adcarousel">
      <div className="content_Carrousel" onClick={linkHandler}>
        <img className='imageAd' src={img.file.url} alt={img.title} />
        <div className='Adtitle' >
          <h3>{title}</h3>
          <div className='Ad_share'>
            <Share />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardClient;