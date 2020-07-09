import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';

//style
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import './ImageCard.scss';

const { Meta } = Card;

const ImageCard = ({
  img,
  meta,
}) => {
  return(
    <Card
      hoverable
      style={{ width: 240, margin: 10, boxShadow: 'green', }}
      cover={
        <img {...img}/>
      }>
      <Meta {...meta} />
      <div className='button'>
        <Button type="primary" shape="circle">
          ir
        </Button>
      </div>
    </Card>
  )
}

ImageCard.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  })
};

ImageCard.defaultProps = {
  img: {
    src:"http://lorempixel.com/g/300/200",
    alt:"example",
  },
  meta:{
    title:"Europe Street beat",
    description:" description ",
  }
}

export default ImageCard;