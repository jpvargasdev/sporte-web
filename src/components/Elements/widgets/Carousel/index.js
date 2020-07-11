import React from "react";
import PropTypes from "prop-types";
import { Card } from 'antd';
import "antd/dist/antd.css";
import "./carousel.scss";

const { Meta } = Card;



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
      url: 'http://lorempixel.com/output/sports-q-c-738-491-5.jpg',
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
    description: 'hello wor hello wor hello wor hello wor hello wor hello wor',
  }
]

const CarouselItem = ({ img, title, description }) => (
  <div className="content_carousel">
      <Card
        hoverable
        style={{ width: 650 }}
        cover={
          <div className='divImage'>
            <img className='carousel_img ' alt={img.alt} src={img.url} />
          </div>
         }
      >
        <Meta title={title} description={description} />
      </Card>
  </div>
);

const CarouselComponent = () => {
  return (
    <Carousel autoplay>
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
