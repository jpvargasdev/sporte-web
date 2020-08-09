import React from "react";
import PropTypes from "prop-types";

// components
import CarrouselCard from '../../cards/CarrouselCard';
import { Carousel } from 'antd';

const CarouselComponent = ({ cards }) => (
  <Carousel autoplay>
    {
      cards.map(
        card => (
          <CarrouselCard
            {...card.fields}
            linkHandler={card.linkHandler}
          />
        )
      )}
  </Carousel>
);

CarouselComponent.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

export default CarouselComponent;
