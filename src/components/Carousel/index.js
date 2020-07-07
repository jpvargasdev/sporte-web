import React from "react";
import PropTypes from "prop-types";

// components
import { Carousel } from 'antd';

const CarouselItem = ({ img, title, description }) => (
  <div className="">
    <h5>{title}</h5>
    <p>{description}</p>
    <img src={img.url} alt={img.alt}/>
  </div>
);

const CarouselComponent = ({ items }) => {
  return (
    <section>
      <Carousel autoplay>
        {
          items.map(
            item => (
              <CarouselItem
                img={item.img}
                title={item.title}
                description={item.description}
              />
            )
          )}
      </Carousel>
    </section>
  );
};

CarouselComponent.propTypes = {};

export default CarouselComponent;
