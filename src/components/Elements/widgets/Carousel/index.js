import React from "react";
import PropTypes from "prop-types";
import { Card} from 'antd';
import "antd/dist/antd.css";
import "./carousel.scss";
import Following from "../../../Base/Following";

const { Meta } = Card;

// components
import { Carousel } from 'antd';


const CarouselItem = ({ img, title, description, linkHandler }) => (
  <div className="content_carousel">
      <div className="cardw__image" onClick={linkHandler}>
      <img className='image' src={img.file.url} alt={img.title} />
      <div className='card__title' >
        <h3>{title}</h3>
        <Following props='white'/>
      </div>
    </div>
  </div>
);

const CarouselComponent = ({ cards }) => {
  return (
    <Carousel autoplay>
      {
        cards.map(
          card => (
            <CarouselItem
              img={card.bannerImage}
              title={card.title}
              key={card.id}
              description={card.description}
              linkHandler={card.linkHandler}
            />
          )
        )}
    </Carousel>
  );
};

CarouselComponent.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

export default CarouselComponent;
