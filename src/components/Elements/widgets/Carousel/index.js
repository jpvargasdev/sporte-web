import React from "react";
import PropTypes from "prop-types";

//style
import "antd/dist/antd.css";

// components
import CarrouselCard from '../../cards/CarrouselCard'
import { Carousel } from 'antd';

const CarouselComponent = ({ cards }) => {
  return (
    <Carousel autoplay>
      {
        cards.map(
          card => (
            <CarrouselCard
              img={card.bannerImage}
              title={card.title}
              key={card.id}
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
    }),
  ),
};

export default CarouselComponent;
