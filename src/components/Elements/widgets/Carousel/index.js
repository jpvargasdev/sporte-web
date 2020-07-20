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
      <Card
        onClick={linkHandler}
        hoverable
        style={{ width: 665, borderRadius:5 }}
        cover={
          <div className='divImage'>
            <img className='carousel_img ' alt={img.file.title} src={img.file.url} />
          </div>
         }
      >
        <Meta title={title} description={description} />
        <Following />
      </Card>
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
