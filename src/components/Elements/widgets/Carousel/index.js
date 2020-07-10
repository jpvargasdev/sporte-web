import React from "react";
import PropTypes from "prop-types";

// components
import { Carousel } from 'antd';

const Items = [
  {
    img: {
      url: 'http://lorempixel.com/output/sports-q-c-738-491-1.jpg',
      alt: 'img',
    },
    title: 'Hello',
    description: 'hello wor',
  },
  {
    img: {
      url: 'http://lorempixel.com/output/sports-q-c-738-491-5.jpg',
      alt: 'img',
    },
    title: 'Hello',
    description: 'hello wor',
  },
  {
    img: {
      url: 'http://lorempixel.com/g/400/200',
      alt: 'img',
    },
    title: 'Hello',
    description: 'hello wor',
  },
  {
    img: {
      url: 'http://lorempixel.com/g/400/200',
      alt: 'img',
    },
    title: 'Hello',
    description: 'hello wor',
  }
]

const CarouselItem = ({ img, title, description }) => (
  <div className="content_carousel">
    <img 
      src={img.url} 
      alt={img.alt}
      className='carousel_img'
      />
      <div className='carousel_info'>
        <h5 className='carousel_title'>{title}</h5>
        <p className='carousel_p'>{description}</p>
      </div>
  </div>
);

const CarouselComponent = () => {
  return (
    <section>
      <Carousel >
        {
          Items.map(
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
