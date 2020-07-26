import React from 'react' ;
import PropTypes from 'prop-types';


//styles 
import './recomendationCard.scss';


const RecomendationCard = ({
  bannerImage,
  title,
}) => {
  return(
    <div className="recomendation">
      <img className=" recoment_img" src={bannerImage.file.url} alt={bannerImage.title}/>
      <div className=" recoment_p">
        <h6>{title}</h6>
      </div>
    </div>
  )
} 

RecomendationCard.propTypes = {
  description: PropTypes.string,
  bannerImage: PropTypes.shape({
    title: PropTypes.string,
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  linkHandler: PropTypes.func,
}

RecomendationCard.defaultProps= {
  title: "test",
  bannerImage: {
    title: "test",
    file: {
      url: "testel c",
    },
  },
}


export default RecomendationCard;